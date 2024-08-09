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
    if (!user) {
      res.json({
        message: "User nto found or login first",
      });
    }
    const matchPassword = await bcrypt.compare(password, user.password);
    if (!matchPassword) {
      res.json({
        success: false,
        message: "Wrong password",
      });
    }
    const token = await jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY);
    res.cookie("access_token", token, {
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
export const logout = async (req, res) => {
  try {
    
    res.clearCookie("access_token"); // Properly clear the cookie
    res.status(200).json({
      success: true,
      message: "Logout successful",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error logging out",
      error: error.message,
    });
  }
};
export const getAll = async (req, res) => {
  try {
    const all = await User.find();
    res.json({
      message: "successfuly get all user",
      data: all,
    });
  } catch (error) {
    console.log(error);
  }
};
export const test = async(req,res)=>{
  try {
    const user = await User.findById(req.params.id)
    if(user){
      res.json({
        message:"user found",
        data:user
      })
    }else{
      res.json({
        message:"user not found Register first",
      })
    }
  } catch (error) {
    console.log(error);
    res.json({
      message:"erro in test",
      error:error.message
    })
    
  }
}
