const express = require("express")
const { createNewRecipe, getAllRecipes,getRecipesById,updateRecipesById,deleteRecipeById} = require("../controllers/recipes");
const authentication = require("../middleware/authentication");

const recipesRouter = express.Router()



recipesRouter.post("/",authentication, createNewRecipe);
recipesRouter.get("/all",authentication, getAllRecipes);
recipesRouter.get("/search", getRecipesById);
recipesRouter.put("/:id", updateRecipesById);
recipesRouter.delete("/:id", deleteRecipeById);

module.exports = recipesRouter