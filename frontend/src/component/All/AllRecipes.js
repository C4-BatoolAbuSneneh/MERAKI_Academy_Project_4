import ReactStars from "react-rating-stars-component";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AllRecipe.css";
import Product from "../Product/Product";
import { BsFillAlarmFill, BsHeart } from "react-icons/bs";
import { AiFillEdit, AiFillDelete, AiOutlinePlus } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
const AllRecipe = ({ isAdmin, isLogedIn, token }) => {
  const [recipes, setRecipes] = useState([]);
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
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
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
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
        { title, ingredients, description, time },
        { headers: { Authorization: `Bearer ${tokenn}` } }
      )
      .then((result) => {
        console.log(result.data);
        setRecipes(result.data.recipes);
        getAllRecipes();
      })
      .catch((err) => {
        console.log(err.response);
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
      setComment("")
  };

  const myRecipe =
    recipes &&
    recipes.map((ele, i) => {
      return (
        <>
          <br />
          {/* <div key={i} className="allpage">{" "} */}
          <div className="all2">
            <Link onClick={Product} to={`/recipes/all/product/${ele._id}`}>
              {" "}
              <img className="image" src={ele.image} />
            </Link>
            <p className="title3"> {ele.title}</p>
            <p className="time3">
              {" "}
              <BsFillAlarmFill /> {ele.time}{" "}
            </p>
            <div className="stars1">
              ______________________________
              <h3 style={{ color: "black" }}>how would you rate?</h3>
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                isHalf={true}
                activeColor="#ffd700"
              />
              ______________________________
              <h3
                style={{ transform: "translate(14em,-12.5em)", color: "black" }}
              >
                Reviews
              </h3>
            </div>

            {ele.comments &&
              ele.comments.map((ele, i) => {
                return (
                  <>
                    <p key={i} className="comment">
                      {ele.comment}
                    </p>
                  </>
                );
              })}
            <input
            value={comment}
              onChange={(e) => {
                setComment(e.target.value);
              }}
              placeholder="  tell us what do you think"
              className="input2"
            ></input>
            {/* <br /> <br />
              <br /> <br /> */}
            <button onClick={() => addToLocalStorge(ele)} className="heart">
              <BsHeart
                style={{
                  color: "black",
                }}
                // className="hh"
              />{" "}
            </button>
            {isLogedIn || token ? (
              <>
                <button className="plus1" onClick={() => newComment(ele._id)}>
                  <AiOutlinePlus style={{ color: "black" }} />{" "} 
                </button>
              </>
            ) : (
              <>
                <button
                  disabled
                  className="add1"
                  onClick={() => newComment(ele._id)}
                >
                  <AiOutlinePlus style={{ color: "black" }} />{" "}
                </button>
              </>
            )}
            {isAdmin ? (
              <>
                <br />
                <br />
                <input
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  className="titl"
                  placeholder="Title"
                ></input>
                <br />
                <br />
                <input
                  onChange={(e) => {
                    setTime(e.target.value);
                  }}
                  className="tim"
                  placeholder="Time"
                ></input>
                <br />
                <br />
                <textarea
                  onChange={(e) => {
                    setIngredients(e.target.value);
                  }}
                  className="ing"
                  placeholder="Ingredients"
                ></textarea>
                <br />
                <br />
                <textarea
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  className="desc"
                  placeholder="Description"
                ></textarea>
                <br />
                <br />
                <button
                  className="update"
                  onClick={() => updateRecipesById(ele._id)}
                >
                  <AiFillEdit />
                </button>
                <br />
                <br />
                <button
                  className="delete2"
                  onClick={() => deleteRecipesById(ele._id)}
                >
                  <AiFillDelete />
                </button>
              </>
            ) : (
              <></>
            )}
          </div>
          {/* </div> */}
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
