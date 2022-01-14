import React, { useState, useEffect } from "react";
import axios from "axios";

const AllRecipe = ({ isAdmin }) => {
  const [recipes, setRecipes] = useState([]);
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("");

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
  const myRecipe =
    recipes &&
    recipes.map((ele, i) => {
      return (
        <>
          <br /> <br />
          <div key={i} className="allpage">
            {" "}
            
            <div className="newr">
            <br /> <br />
            <img style={{ width: "30%" }} src={ele.image} />
            <br/> <br/>
            <p className="title"> {ele.title}</p>
            {/* <i class="glyphicon glyphicon-thumbs-up"></i> */}
            {/* <i class="far fa-clock"></i> */}
            {/* <i class="far fa-clock">&#xe424;</i> */}
            {/* <i style={{fontSize:"80px"}} class='fas fa-bullhorn'>&#xf0a1;</i> */}
            <p className="time"> {ele.time}</p>
            <p className="ingredient"> Ingredients : {ele.ingredients}</p>
            <p className="description"> Description: {ele.description}</p>
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
                  className="tit"
                  placeholder="Time"
                ></input>
                <br />
                <br />
                <textarea
                  onChange={(e) => {
                    setIngredients(e.target.value);
                  }}
                  className="tite"
                  placeholder="Ingredients"
                ></textarea>
                <br />
                <br />
                <textarea
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  className="tite"
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
                <br />
                <br />
                
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
      {/* <div className="ui search">
        <div className="ui icon input">
          <input
            type="text"
            className="prompt"
            style={{ padding: "5px 200px", fontSize: "16px" }}
            placeholder="search...."
          />
          <i className="search icon"></i>
        </div>
      </div>
      <br />
      <div className="ui called list"></div> */}

      <div className="buttonall" onClick={getAllRecipes}>
        {" "}
      </div>
      {myRecipe}
    </>
  );
};

export default AllRecipe;
