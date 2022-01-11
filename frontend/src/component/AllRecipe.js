import React, { useState,useEffect } from "react";
import axios from "axios";

const AllRecipe = ({token}) => {
    const [recipes, setRecipes] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [time, setTime] = useState("");
    const [image, setImage] = useState("");
    const [pargraph, setParagraph] = useState("");
    const [userId, setUserId] = useState("");

    useEffect(() => {
        getAllRecipes();
    }, []);
    const getAllRecipes = () => {
        axios
          .get(`http://localhost:5000/recipes`,{image,title,description,time}, {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((result) => {
            setRecipes(result.data.recipes);
            setUserId(result.data.userId)
          })
          .catch((err) => {
          });
      };
      

const myRecipe = recipes && recipes.map((ele,i) => {
    return (
        <>
        <div key={i}>
          <p className="title" key={ele.title}>
            {" "}
            {ele.title}
          </p>
          <p className="description" key={ele.description}>
            {" "}
            {ele.description}
          </p>
          <br />

          <input
            onChange={(e) => {
              setTitle(e.target.value);
             
            }}
            placeholder="update title"
          ></input>
          <br />
          <br />
          <textarea
            onChange={(e) => {
                setDescription(e.target.value);
               
            }}
            placeholder="update description"
          ></textarea>
          <br />
        </div>
        );
    );
        
        </>
    )
})
return (
    <>
          <button  style={{cursor:"pointer",fontSize:"15px",margin:"10px",padding: "5px 15px"}} onClick={getAllRecipes}>
        {" "}
        get all recipes{" "}
      </button>

    
        {myRecipe}

    </>
)
}

export default AllRecipe;
