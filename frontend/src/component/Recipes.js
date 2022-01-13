import React, { useState } from "react";
import axios from "axios";

const NewRecipes = ({ token }) => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [time, setTime] = useState("");
  const [paragraph, setParagraph] = useState("");

  const createRecipe = () => {
    axios
      .post(
        "http://localhost:5000/recipes",
        { image, title, ingredients, description, time },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((response) => {
        setParagraph("The recipe has been created successfully");
      })
      .catch((err) => {
        setParagraph(
          "Error happened while creating a new recipe, please try again"
        );
      });
  };
  return (
    <>
      <br />
      <br />
      <div className="input">
        <br />
        <br />

        <input
          onChange={(e) => {
            setImage(e.target.value);
          }}
          type="text"
          placeholder="click image"
        ></input>
        <br />
        <br />

        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          type="text"
          placeholder="write your title"
        ></input>
        <br />
        <br />
        <input
          onChange={(e) => {
            setTime(e.target.value);
          }}
          type="text"
          placeholder="write your time"
        ></input>
        <br />
        <br />

        <textarea
          onChange={(e) => {
            setIngredients(e.target.value);
          }}
          placeholder="Write your ingredients"
        ></textarea>
        <br />
        <br />

        <textarea
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          type="text"
          placeholder="write your description"
        ></textarea>
        <br />
        <br />

        <br />

        <br />
        <button onClick={createRecipe}>create new recipe</button>
        <br />
        <br />
        <p>{paragraph}</p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
};

export default NewRecipes;
