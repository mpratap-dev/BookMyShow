import User from "../models/users.js";
import jwt from "jsonwebtoken";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({
      users,
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({
      user,
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const addUser = async (req, res) => {
  try {
    const body = req.body;
    const { email } = body;
    // TODO: Encrypt password using bcrypt
    const isExistingUser = await User.findOne({ email });
    if (isExistingUser) {
      res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    const user = await User.create(body);

    res.status(201).json({
      success: true,
      message: "User created successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    const privateKey = process.env.JWT_SECRET;
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }

    if (user.password !== password) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign({ userId: user._id }, privateKey, {
      expiresIn: "1d",
    });

    res.status(200).json({
      success: true,
      data: user,
      token,
      message: "Login successful",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const logout = async (req, res) => {
  try {
    const privateKey = process.env.JWT_SECRET;
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, privateKey, (err, decoded) => {
      if (err) {
        return res.status(400).json({
          success: false,
          message: "Invalid token",
        });
      }
      // To expire a token, we can simply set its expiration time to the past
      const expiredToken = jwt.sign({ userId: decoded.userId }, privateKey, {
        expiresIn: "1ms",
      });
      res.status(200).json({
        success: true,
        message: "Logout successful, token expired",
        token: expiredToken,
      });
    });
  } catch (error) {}
};
