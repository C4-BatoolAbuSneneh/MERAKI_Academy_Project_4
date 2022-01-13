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
recipesRouter.get("/search", authentication, getRecipesById);
recipesRouter.put("/:id", authentication, authorization, updateRecipesById);
recipesRouter.delete("/:id", authentication, authorization, deleteRecipeById);

module.exports = recipesRouter;
