import React, { useState } from "react";
import axios from "axios";
import "./Recipe.css";
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
      <div>
        <br />
        <br />
        <input
          onChange={(e) => {
            setImage(e.target.value);
          }}
          type="text"
          placeholder="Image"
          className="rec"
        ></input>
        <br />
        <br />
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          type="text"
          placeholder="Title"
          className="rec"
        ></input>
        <br />
        <br />
        <input
          onChange={(e) => {
            setTime(e.target.value);
          }}
          type="text"
          className="rec"
          placeholder="Time"
        ></input>
        <br />
        <br />
        <textarea
          onChange={(e) => {
            setIngredients(e.target.value);
          }}
          placeholder="Ingredients"
          className="rec"
        ></textarea>
        <br />
        <br />
        <textarea
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          type="text"
          placeholder="Description"
          className="rec"
        ></textarea>
        <br />
        <button className="buttonnew" onClick={createRecipe}>
          create new recipe
        </button>
        <br />
        <br />
        <br />
        <p style={{ fontSize: "25px", color: "white" }}>{paragraph}</p>
      </div>
    </>
  );
};

export default NewRecipes;
