import React, { useState,useEffect } from "react";
import axios from "axios";

const AllRecipe = ({token}) => {
    const [recipes, setRecipes] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [pargraph, setParagraph] = useState("");
    const [userId, setUserId] = useState("");

    useEffect(() => {
        getAllRecipes();
    }, []);
    const getAllRecipes = () => {
        axios
          .get(`http://localhost:5000/recipes`, {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((result) => {
            setRecipes(result.data.recipes);
            setUserId(result.data.userId)
          })
          .catch((err) => {
           
          });
      };



  return (
      <>
        <></>
  <></>
  <></>

      
      </>
      )
}

export default AllRecipe;
