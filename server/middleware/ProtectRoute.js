import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const secretKey = process.env.JWT_SECRET_KEY;
const ProtectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.access_token;
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Please register first",
      });
    }

    // Verify and decode the token
    jwt.verify(token, secretKey, (err, user) => {
      if (err) {
        return res.status(403).json({
          message: "Token is not valid!",
        });
      }
      req.user = user;
      next();
    });
  } catch (error) {
    console.error(`Token verification error: ${error}`);
    res.status(401).json({
      success: false,
      message: "Invalid token",
    });
  }
};
export default ProtectRoute;
