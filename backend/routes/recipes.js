const express = require("express")
const { createNewRecipe} = require("../controllers/recipes")

const recipesRouter = express.Router()



recipesRouter.post("/", createNewRecipe);

module.exports = recipesRouter