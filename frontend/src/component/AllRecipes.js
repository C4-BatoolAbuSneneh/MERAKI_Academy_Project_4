import React, { useState, useEffect } from "react";
import axios from "axios";

const AllRecipe = ({ token }) => {
  const [recipes, setRecipes] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("");
  const [image, setImage] = useState("");

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
      .catch((err) => {
      });
  };
  const deleteRecipesById = () => {
    axios.delete(``)
  }
  const myRecipe =
    recipes &&
    recipes.map((ele, i) => {
      return (
        <>
          <div key={i}>
            <p className="image" key={ele.image}>
              {" "}
              {ele.image}
            </p>
            <p className="title" key={ele.title}>
              {" "}
              {ele.title}
            </p>
            <p className="description" key={ele.description}>
              {" "}
              {ele.description}
            </p>
            <p className="time" key={ele.time}>
              {" "}
              {ele.time}
            </p>
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

export default AllRecipe;