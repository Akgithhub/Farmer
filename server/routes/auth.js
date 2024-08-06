import express from "express";
import { Register, signUp, test } from "../controller/auth.js";
import ProtectRoute from "../middleware/ProtectRoute.js";

// Router
const authRouter = express.Router();

// Routes Handling
authRouter.post("/signup", signUp);
authRouter.post("/register", Register);
authRouter.get("/test", ProtectRoute, test);

export default authRouter;
