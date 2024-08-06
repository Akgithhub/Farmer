import User from "../model/auth.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signUp = async (req, res) => {
  try {
    const { name, password, email } = req.body;
    const userAlready = await User.findOne({ email: email });
    if (userAlready) {
      return res.json({
        success: false,
        message: "User already exists",
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const NewUser = {
      name: name,
      email: email,
      password: hashedPassword,
    };
    await User.create(NewUser);
    res.json({
      success: true,
      message: "User created successfully",
      data: NewUser,
    });
  } catch (error) {
    console.log(`Error while login user ${error}`);
    res.json({
      success: false,
      message: "Error while login user",
      error: error.message,
    });
  }
};
export const Register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    const matchPassword = await bcrypt.compare(password, user.password);
    if (!matchPassword) {
      res.json({
        success: false,
        message: "Wrong password",
      });
    }
    const token = await jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY);
    res.cookies("access_token", token, {
      httpOnly: true,
    });

    res.json({
      success: true,
      message: "register successfully",
      data: user,
    });
  } catch (error) {
    console.log(`Error while register user ${error}`);
    res.json({
      success: false,
      message: "Error while register user",
      error: error.message,
    });
  }
};

export const test = async (req, res) => {
  console.log("success");
};
