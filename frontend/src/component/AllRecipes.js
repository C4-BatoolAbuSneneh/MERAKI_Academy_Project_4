import React, { useState, useEffect } from "react";
import axios from "axios";

const AllRecipe = ({ token, isAdmin }) => {
  const [recipes, setRecipes] = useState();
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("");
  useEffect(() => {
    getAllRecipes();
  }, []);
  const getAllRecipes = () => {
    axios
      .get(`http://localhost:5000/recipes/all`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((result) => {
        setRecipes(result.data.recipes);
      })
      .catch((err) => {});
  };
  const deleteRecipesById = (id) => {
    axios
      .delete(`http://localhost:5000/recipes/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((result) => {
        setRecipes(result.data.recipes);
        getAllRecipes();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const updateRecipesById = (id) => {
    axios
      .put(
        `http://localhost:5000/recipes/${id}`,
        { image, title,ingredients, description, time },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((result) => {
        setRecipes(result.data.recipes);
        getAllRecipes();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const myRecipe =
    recipes &&
    recipes.map((ele, i) => {
      return (
        <>
          <div key={i}>
            <img style={{ width: "200px" }} src={ele.image} />
            <p className="title"> title: {ele.title}</p>
            <p className="ingredient"> ingredients : {ele.ingredients}</p>
            <p className="description"> description: {ele.description}</p>
            <p className="time"> time : {ele.time}</p>
            <br />

            {isAdmin ? (
              <div>
                <input
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  placeholder="title"
                ></input>
                 <input
                  onChange={(e) => {
                    setTime(e.target.value);
                  }}
                  placeholder="time"
                ></input>
                 <textarea
                  onChange={(e) => {
                    setIngredients(e.target.value);
                  }}
                  placeholder="ingredients"
                ></textarea>
                <textarea
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  placeholder="description"
                ></textarea>
               
                <button
                  onClick={() => updateRecipesById(ele._id)}
                  placeholder="update"
                >
                  update
                </button>
                <br />
                <button onClick={() => deleteRecipesById(ele._id)}>
                  delete
                </button>
              </div>
            ) : (
              <></>
            )}
          </div>
        </>
      );
    });
  return (
    <>
      <button onClick={getAllRecipes}> Get All Recipes </button>
      {myRecipe}
    </>
  );
};

export default AllRecipe;
