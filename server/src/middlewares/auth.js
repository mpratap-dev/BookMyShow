import jwt from 'jsonwebtoken';
import User from '../models/users.js';
import { ROLES } from '../constants/auth.js';

export const verifyToken = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader?.split(" ")[1] || "";

    if(!authHeader  || !token) {
      return res.status(401).json({
        success: false,
        message: "Token not provided"
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const userId = decoded.userId;
    req.userId = userId;

    const user = await User.findById(userId);
    if(!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid User Token"
      });
    }

    req.role = user.role;
    req.email = user.email;
    req.name = user.name;
    
    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message
    });
  }
}

export const verifyIfSameUser = async (req, res, next) => {
  try {
    const userId = req.userId;
    const { id } = req.params;
    if(userId !== id) {
      return res.status(403).json({
        success: false,
        message: "You are not authorized to access this resource"
      });
    }
    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message
    });
  }
}

export const checkAdminRole = async (req, res, next) => {
  try {
    const role = req.role;
    if(role !== ROLES.ADMIN) {
      return res.status(403).json({
        success: false,
        message: "You are not authorized to access this resource"
      });
    }
    next();
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
}

export const checkValidRole = (roles = [ROLES.ADMIN]) => {
  return async (req, res, next) => {
    try {
      const role = req.role;
      if (!roles.includes(role)) {
        return res.status(403).json({
          success: false,
          message: "You are not authorized to access this resource"
        });
      }
      next();
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  };
};
