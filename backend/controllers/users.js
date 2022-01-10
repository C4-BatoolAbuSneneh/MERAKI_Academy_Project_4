const usersModel = require("../database/models/users");

const createNewAuthor = (req, res) => {
    const { firstName, lastName, age, country, email, password } = req.body;
    const user = new usersModel({
      firstName,
      lastName,
      age,
      country,
      email,
      password,
    });
  
    user
      .save()
      .then((result) => {
          res.status(201).json({
          success: true,
          message: `Success Author Added`,
          author: result,
        });
      })
      .catch((err) => {
        if (err.keyPattern) {
          return res.status(409).json({
            success: false,
            message: `The email already exists`,
          });
        }
        res.status(500).json({
          success: false,
          message: `Server Error`,
          err: err,
        });
      });
  };
  
  module.exports = {
    createNewAuthor,
  };
  