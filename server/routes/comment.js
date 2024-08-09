import express from "express";
import ProtectRoute from "../middleware/ProtectRoute.js";
import { addComment } from "../controller/comment.js";

const commentRouter = express.Router();

// add comment
commentRouter.post("/addComment",ProtectRoute, addComment);
// delete comment
commentRouter.delete("/deleteComment");
// udate comment
commentRouter.put("/updateComment");

export default commentRouter;
