import Comment from "../model/comment.js";

export const addComment = async (req, res) => {
  const comment = req.body;
  const newComment = new Comment(comment, req.user._id);
  try {
    await newComment.save();
    res.status(200).json({
      message: "Comment added successfully",
      data: newComment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error while adding comment",
      error: error.message,
    });
  }
};
// delete comment
export const deleteComment = async (req, res) => {
  const commentId = req.params.id;
  try {
    const deleteCommentById = await Comment.findByIdAndDelete(commentId);
    if (deleteCommentById) {
      res.json({
        success: true,
        message: "comment deleted successfully",
        data: deleteCommentById,
      });
    } else {
      res.json({
        success: false,
        message: "comment not found",
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "error while deleteing comment",
      error: error.message,
    });
  }
};
// update comment
export const updateComment = async (req, res) => {
  try {
    const commentId = req.params.id;
    const updatedcomment = await Comment.findByIdAndUpdate(
      commentId,
      req.body,
      { new: true }
    );
    if (updatedcomment) {
      res.json({
        success: true,
        message: "comment updated successfully",
        data: updatedcomment,
      });
    } else {
      res.json({
        success: false,
        message: "comment not found",
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "error while updating comment",
      error: error.message,
    });
  }
};
// getAll comment
export const allComment = async (req, res) => {
  try {
    const Allcomments = await Comment.find();
    res.json({
      success: true,
      message: "All comments",
      data: Allcomments,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "error while get all comment",
      error: error.message,
    });
  }
};
