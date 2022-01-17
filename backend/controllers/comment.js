const commentsModel = require("../database/models/comment");
const recipeModel = require("../database/models/recipes");

const createNewComment = (req, res) => {
  const { comment } = req.body;
  const recipeId = req.params.id;
  const commenter = req.token.userId;
  const newComment = new commentsModel({
    comment,
    commenter,
  });
  newComment
    .save()
    .then((result) => {
      recipeModel
        .findByIdAndUpdate(
          { _id: recipeId },
          { $push: { comments: result._id } }
        )
        .then(() => {
          res.status(201).json({
            success: true,
            message: `comment created`,
            result: result,
          });
        })
        .catch((err) => {
          res.status(500).json({
            success: false,
            message: `Server Error`,
            err: err,
          });
        });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err,
      });
    });
};

module.exports = { createNewComment };
