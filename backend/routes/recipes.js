const express = require("express");
const {
  createNewRecipe,
  getAllRecipes,
  getRecipesById,
  updateRecipesById,
  deleteRecipeById,
} = require("../controllers/recipes");
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");

const recipesRouter = express.Router();

recipesRouter.post("/", authentication, authorization, createNewRecipe);
recipesRouter.get("/all", authentication, getAllRecipes);
recipesRouter.get("/search", authorization, getRecipesById);
recipesRouter.put("/:id", authorization, updateRecipesById);
recipesRouter.delete("/:id", authorization, deleteRecipeById);

module.exports = recipesRouter;
