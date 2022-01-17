import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AllRecipe.css";
import Product from "../Product/Product";
import { Link } from "react-router-dom";
const AllRecipe = ({ isAdmin }) => {
  const [recipes, setRecipes] = useState([]);
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("");
  const [comment, setComment] = useState("");
  const addToLocalStorge = (ele) => {
    const fav = JSON.parse(localStorage.getItem("favourite")) || [];
    fav.push(ele);
    localStorage.setItem("favourite", JSON.stringify(fav));
  };
  const tokenn = localStorage.getItem("token");
  const getAllRecipes = () => {
    axios
      .get(`http://localhost:5000/recipes/all`, {
        headers: { Authorization: `Bearer ${tokenn}` },
      })
      .then(async (result) => {
        await setRecipes(result.data.recipes);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getAllRecipes();
  }, []);
  const deleteRecipesById = (id) => {
    axios
      .delete(`http://localhost:5000/recipes/${id}`, {
        headers: { Authorization: `Bearer ${tokenn}` },
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
        { image, title, ingredients, description, time },
        { headers: { Authorization: `Bearer ${tokenn}` } }
      )
      .then((result) => {
        setRecipes(result.data.recipes);
        getAllRecipes();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const newComment = (id) => {
    axios
      .post(
        `http://localhost:5000/recipes/${id}/comments`,
        { comment },
        {
          headers: { Authorization: `Bearer ${tokenn}` },
        }
      )
      .then((result) => {
        setComment(result.data.comments);
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
          <br />
          <div key={i} className="allpage">
            {" "}
            <div className="all1">
              <br /> <br />
              <Link onClick={Product} to={`/recipes/all/product/${ele._id}`}>
                {" "}
                <img className="image" src={ele.image} />
              </Link>
              <br />
              <br />
              <p className="title"> {ele.title}</p>
              <p className="time"> {ele.time}</p>
              <p>
                {ele.comments &&
                  ele.comments.map((ele) => {
                    return (
                      <>
                        <li className="comment">{ele.comment}</li>
                      </>
                    );
                  })}
              </p>
              <input
                onChange={(e) => {
                  setComment(e.target.value);
                }}
                placeholder="comment..."
                className="input"
              ></input>
              <br /> <br />
              <button className="add1" onClick={() => newComment(ele._id)}>
                add comment
              </button>
              <br /> <br />
              <button onClick={() => addToLocalStorge(ele)} className="myfavor">
                MyFavourite{" "}
              </button>
              <br />
              <br />
              {isAdmin ? (
                <div>
                  <br />
                  <br />
                  <input
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                    className="tit"
                    placeholder="Title"
                  ></input>
                  <br />
                  <br />
                  <input
                    onChange={(e) => {
                      setTime(e.target.value);
                    }}
                    className="timee"
                    placeholder="Time"
                  ></input>
                  <br />
                  <br />
                  <textarea
                    onChange={(e) => {
                      setIngredients(e.target.value);
                    }}
                    className="ingred"
                    placeholder="Ingredients"
                  ></textarea>
                  <br />
                  <br />
                  <textarea
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                    className="describ"
                    placeholder="Description"
                  ></textarea>
                  <br />
                  <br />
                  <button
                    className="update"
                    onClick={() => updateRecipesById(ele._id)}
                  >
                    Update
                  </button>
                  <br />
                  <br />
                  <button
                    className="delete"
                    onClick={() => deleteRecipesById(ele._id)}
                  >
                    Delete
                  </button>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </>
      );
    });
  return (
    <>
      <br />
   
      {myRecipe}
    </>
  );
};

export default AllRecipe;
