const express = require("express")
const { createNewRecipe, getAllRecipes} = require("../controllers/recipes")

const recipesRouter = express.Router()



recipesRouter.post("/", createNewRecipe);
recipesRouter.get("/all", getAllRecipes);

module.exports = recipesRouter