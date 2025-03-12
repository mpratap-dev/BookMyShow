import User from "../models/users.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({
      users,
      success: true
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false
    });
  }
};


export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({
      user,
      success: true
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}

export const addUser = async (req, res) => {
  try {
    const body = req.body;
    const { email } = body;
    const isExistingUser = await User.findOne({ email });
    if(isExistingUser) {
      res.status(400).json({
        success: false,
        message: "User already exists"
      });
    }

    const user = await User.create(body);
    res.status(201).json({
      success: true,
      user
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
}

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if(!user) {
      return res.status(400).json({
        success: false,
        message: "User not found"
      });
    }
    
    if(user.password !== password) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials"
      });
    }

    res.status(200).json({
      success: true,
      user,
      message: "Login successful"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
}