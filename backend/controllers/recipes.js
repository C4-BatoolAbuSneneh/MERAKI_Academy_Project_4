const { findById } = require("../database/models/recipes");
const recipesModel = require("../database/models/recipes")

const createNewRecipe = (req, res) => {
    const {image,title, description ,time} = req.body;
    const newRecipe = new recipesModel({
        image,
      title,
      description,
      time,
    });
    newRecipe
    .save()
    .then((result) => {
        res.status(201).json({
            success:true,
            message: `recipe created`,
            result: result,
        })
    })
        .catch((err) => {
            res.status(500).json({
                success:false,
                message:`server error`,
                err: err,
            
        })
    })
  }
  const getAllRecipes = (req,res) => {  
      recipesModel
    .find({})
    .then((recipes) => {
        res.status(200).json({
           success: true,
           message: `All the recipes`,
           recipes: recipes
        })
    })
        .catch(err => {
            res.status(500).json({
                success: false,
                message: `No recipe yet`,
                err:err
            
        })
    })
  }
  const getRecipesById = (req,res) => {
      let id = req.query.id;
      recipesModel
      .findById(id)
      .then((result) => {
         if (!result) {
             return res.status(404).json({
                 success: false,
                 message: `The Recipe not found`
             })
         } res.status(200).json({
             success: true,
             message: `The recipe ${id}`,
             result: result
         });
         })
         .catch((err) => {
             res.status(500).json({
                 success:false,
                 message: `Server Error`
             })
         })
  }
module.exports = {createNewRecipe, getAllRecipes,getRecipesById};