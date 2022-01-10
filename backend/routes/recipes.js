const express = require("express")
const { createNewRecipe, getAllRecipes,getRecipesById} = require("../controllers/recipes")

const recipesRouter = express.Router()



recipesRouter.post("/", createNewRecipe);
recipesRouter.get("/all", getAllRecipes);
recipesRouter.get("/search", getRecipesById);

module.exports = recipesRouter