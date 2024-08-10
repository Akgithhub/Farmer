import express from "express";
import ProtectRoute from "../middleware/ProtectRoute.js";
import {
  addComment,
  allComment,
  deleteComment,
  updateComment,
} from "../controller/comment.js";

const commentRouter = express.Router();

// add comment
commentRouter.post("/addComment", ProtectRoute, addComment);
// delete comment
commentRouter.delete("/deleteComment/:id", ProtectRoute, deleteComment);
// udate comment
commentRouter.put("/updateComment/:id", ProtectRoute, updateComment);
commentRouter.get("/allComment", allComment);

export default commentRouter;
