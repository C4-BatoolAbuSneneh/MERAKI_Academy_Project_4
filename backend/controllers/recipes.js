const recipesModel = require("../database/models/recipes")

const createNewRecipe = (req, res) => {
    const { title, description } = req.body;
    const newRecipe = new recipesModel({
      title,
      description,
    });
    newRecipe
    .save()
    .then((result) => {
        res.status(201).json({
            success:true,
            message: `recipe created`,
            author: result
        }).catch((err) => {
            res.status(500).json({
                success:false,
                message:`server error`
            })
        })
    })
  }

  
module.exports = {createNewRecipe};