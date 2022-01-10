const express = require("express")
const { createNewRecipe, getAllRecipes,getRecipesById,updateRecipesById,deleteRecipeById} = require("../controllers/recipes")

const recipesRouter = express.Router()



recipesRouter.post("/", createNewRecipe);
recipesRouter.get("/all", getAllRecipes);
recipesRouter.get("/search", getRecipesById);
recipesRouter.put("/:id", updateRecipesById);
recipesRouter.delete("/:id", deleteRecipeById);

module.exports = recipesRouter