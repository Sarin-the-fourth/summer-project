import jwt from "jsonwebtoken";
import Admin from "../models/adminmodel.js";

const generateAuthToken = (id) => {
  //jwt token
  return jwt.sign({ id, role: "admin" }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

export const sign_in = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    const admin = await Admin.findOne({ email });

    if (!admin || !(await admin.matchPassword(password))) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    // Generate JWT token
    const token = generateAuthToken(admin._id);

    res.cookie("jwt", token, {
      maxAge: 7 * 24 * 60 * 60 * 1000, //7 days in milliseconds
      httpOnly: true, //prevents any XSS attacks
      sameSte: "strict", //prevents any CSRF attacks
      secure: process.env.NODE_ENV === "production", //use secure cookies in production
    });

    return res.status(200).json({
      message: "Sign in successful",
      admin: {
        id: admin._id,
        email: admin.email,
      },
    });
  } catch (error) {
    console.error("Error in sign_in:", error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const sign_up = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    const existingAdmin = await Admin.findOne({ email });

    if (existingAdmin) {
      return res.status(409).json({
        message: "Admin with this email already exists",
      });
    }

    const newAdmin = new Admin({ email, password });
    await newAdmin.save();

    // Generate JWT token
    const token = generateAuthToken(newAdmin._id);

    res.cookie("jwt", token, {
      maxAge: 7 * 24 * 60 * 60 * 1000, //7 days in milliseconds
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
    });

    return res.status(201).json({
      message: "Sign up successful",
      admin: {
        id: newAdmin._id,
        email: newAdmin.email,
      },
    });
  } catch (error) {
    console.error("Error in sign_up:", error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const sign_out = async (req, res) => {
  try {
    res.clearCookie("jwt");
    res.status(200).json({
      success: true,
      message: "Logged out Successfully",
    });
  } catch (error) {
    console.log(`Error in Logout: ${error}`);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const check_auth = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      message: "Admin is authenticated",
      admin: {
        id: req.admin._id,
        email: req.admin.email,
      },
    });
  } catch (error) {
    console.error("Error in check_auth:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
