import React, { useState, useEffect } from "react";
import axios from "axios";

const User = ({ token }) => {
  const [recipes, setRecipes] = useState();
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
  const myRecipe =
    recipes &&
    recipes.map((ele, i) => {
      return (
        <>
          <div key={i}>
            <p className="title"> title: {ele.title}</p>
            <p className="description"> description: {ele.description}</p>
            <p className="time"> time : {ele.time}</p>
            <br />
            <br />
          </div>
        </>
      );
    });
  return (
    <>
      <button onClick={getAllRecipes}> get all recipes </button>
      {myRecipe}
    </>
  );
};

export default User;
