const express = require("express");

const { createNewComment } = require("../controllers/comment");
const authentication = require("../middleware/authentication");

const commentRouter = express.Router();

commentRouter.post("/:recipe_id/comment", authentication, createNewComment);
module.exports = commentRouter;
