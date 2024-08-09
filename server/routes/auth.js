import express from "express";
import { getAll, logout, Register, signUp,test } from "../controller/auth.js";
import ProtectRoute from "../middleware/ProtectRoute.js";

// Router
const authRouter = express.Router();

// Routes Handling
authRouter.post("/signup", signUp);
authRouter.post("/register", Register);
authRouter.delete("/logout/:id", logout);
authRouter.get("/all", getAll);
authRouter.get("/test/:id ",ProtectRoute, test);


export default authRouter;
