const mongoose = require("mongoose");

const recipes = new mongoose.Schema({
  image: {type : String , required: true},
  title: { type: String, required: true },
  ingredients: {type: String, required: true },
  description: { type: String, required: true },
  time:{type: String, required: true},
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
});

module.exports = mongoose.model("Recipes", recipes);
