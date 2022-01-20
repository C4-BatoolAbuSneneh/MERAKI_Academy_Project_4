const express = require("express");
const {
  createNewRecipe,
  getAllRecipes,
  getRecipesById,
  updateRecipesById,
  deleteRecipeById,
  getProductById,
} = require("../controllers/recipes");
const {authentication} = require("../middleware/authentication");
const authorization = require("../middleware/authorization");
const { createNewComment } = require("./../controllers/comment");
const recipesRouter = express.Router();

recipesRouter.post("/", authentication,authorization, createNewRecipe);
recipesRouter.get("/all", getAllRecipes);
recipesRouter.get("/search", getRecipesById);
recipesRouter.put("/:id",authentication, authorization, updateRecipesById);
recipesRouter.delete("/:id",authentication, authorization, deleteRecipeById);
recipesRouter.get("/all/product/:id", getProductById);
recipesRouter.post("/:id/comments", authentication, createNewComment);

module.exports = recipesRouter;
