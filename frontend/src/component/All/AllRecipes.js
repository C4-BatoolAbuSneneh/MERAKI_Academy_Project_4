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
    console.log(title);
    axios
      .put(
        `http://localhost:5000/recipes/${id}`,
        { title, description, ingredients },
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
  };

  const myRecipe =
    recipes &&
    recipes.map((ele, i) => {
      return (
        <>
          <br />
          <div key={i} className="allpage">
            {" "}
            <div className="all2">
              {/* <br /> <br /> */}
              <Link onClick={Product} to={`/recipes/all/product/${ele._id}`}>
                {" "}
                <img className="image" src={ele.image} />
              </Link>
              {/* <br />
              <br /> */}
              <p className="title2"> {ele.title}</p>
              <p className="time2">
                {" "}
                <BsFillAlarmFill
                //  style={{ height: "4%", width: "4%" }}
                />{" "}
                {ele.time}{" "}
              </p>
              <p>
                {ele.comments &&
                  ele.comments.map((ele, i) => {
                    return (
                      <>
                        <li key={i} className="comment">
                          {ele.comment}
                        </li>
                      </>
                    );
                  })}
              </p>
              <div className="stars">
              <ReactStars
          // classNames="stars"
            count={5}
            onChange={ratingChanged}
            size={24}
            isHalf={true}
            // emptyIcon={<i className="far fa=star"></i>}
            // halfIcon={<i className="fa fa-star-half-alt"></i>}
            // filledIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
          />
          </div>
              <input
                onChange={(e) => {
                  setComment(e.target.value);
                }}
                placeholder="comment..."
                className="input1"
              ></input>
              <br /> <br />
              <br /> <br />
              <button onClick={() => addToLocalStorge(ele)} className="heart">
                <BsHeart
                  style={{
                    color: "black",}}
                  // className="hh"
                />{" "}
              </button>
              {isLogedIn || token ? (
                <>
                  <br /> <br />
                  <button className="add1" onClick={() => newComment(ele._id)}>
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
                  {/* <p>{"please login "}</p>
                  {navigate("/login")} */}
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
          </div>
        </>
      );
    });
  return (
    <>
      {/* <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            isHalf={true}
            emptyIcon={<i className="far fa=star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            filledIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
          /> */}
      <br />
      {myRecipe}
    </>
  );
};

export default AllRecipe;
