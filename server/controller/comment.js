import Comment from "../model/comment.js";

export const addComment = async (req, res) => {
  const comment = req.body;
  const newComment = new Comment(comment);
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
// update comment
// getAll comment
