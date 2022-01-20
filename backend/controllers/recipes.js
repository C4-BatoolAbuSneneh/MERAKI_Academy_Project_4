const recipesModel = require("../database/models/recipes");

const createNewRecipe = (req, res) => {
  const { image, title, ingredients, description, time } = req.body;
  const newRecipe = new recipesModel({
    image,
    title,
    ingredients,
    description,
    time,
  });
  newRecipe
    .save()
    .then((result) => {
      res.status(201).json({
        success: true,
        message: `recipe created`,
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `server error`,
        err: err,
      });
    });
};
const getAllRecipes = (req, res) => {
  recipesModel
    .find({})
    .populate("comments")
    .then((recipes) => {
      res.status(200).json({
        success: true,
        message: `All the recipes`,
        recipes: recipes,
        comment: recipes.comment
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `No recipe yet`,
        err: err,
      });
    });
};
const getRecipesById = (req, res) => {
  let id = req.query.id;
  recipesModel
    .findById(id)
    .then((result) => {
      if (!result) {
        return res.status(404).json({
          success: false,
          message: `The Recipe not found`,
        });
      }
      res.status(200).json({
        success: true,
        message: `The recipe ${id}`,
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
      });
    });
};
const updateRecipesById = (req, res) => {
  const recipe = req.params.id;
  let id = req.body;
  recipesModel
    .findByIdAndUpdate({ _id: recipe }, id, { new: true })
    .then((result) => {
      if (!result) {
        return res.status(404).json({
          success: false,
          message: `The Recipe ${_id} is not found`,
        });
      }
      res.status(202).json({
        success: true,
        message: `recipe updated`,
        recipe: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err:err
      });
    });
};
const deleteRecipeById = (req, res) => {
  const id = req.params.id;
  recipesModel
    .findByIdAndDelete(id)
    .then((result) => {
      if (!result) {
        return res.status(404).json({
          success: false,
          message: `The Recipe: ${id} is not found`,
        });
      }
      res.status(200).json({
        success: true,
        message: `Succeeded to delete recipe with id: ${id}`,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
      });
    });
};
const getProductById = (req, res) => {
  const id = req.params.id;
    recipesModel
    .findById(id)
    .then((result) => {
      res.status(200).json({
        success: true,
        message: `the recipe ${id}`,
        result: result
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message:`server error`,
       error:err
      });
    });
};
module.exports = {
  createNewRecipe,
  getAllRecipes,
  getRecipesById,
  updateRecipesById,
  deleteRecipeById,
  getProductById
};
