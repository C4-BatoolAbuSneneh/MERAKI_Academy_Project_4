import React, {useState} from "react";
import axios from "axios";
// import burger from './image'
const Recipes = ({ token }) => {
    
    // const [image, setImage]  = useState("");
    const [image, setImage] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [time, setTime] = useState("");
    const [paragraph, setParagraph] = useState("");

    const createRecipe = () => {
        axios.post("http://localhost:5000/recipes", {image,title,description,time},
        { headers: { Authorization: `Bearer ${token}` } ,
    }).then((response) => {
        console.log(response);
        setParagraph("The recipe has been created successfully")
    }).catch((err) => {
        setParagraph("Error happened while creating a new recipe, please try again"
        )
    })
    }
    return (
<>
<div className="input">
{/* <img src={burger} alt="burger" /> */}
<input onChange={(e) => {
    setImage(e.target.value)
}} type="text" placeholder="click image"></input>

<input onChange={(e) => {
    setTitle(e.target.value)
}} type="text" placeholder="write your title"></input>
<textarea onChange={(e) => {
    setDescription(e.target.value)
}} type="text" placeholder="write your description"></textarea>
<input onChange={(e) => {
    setTime(e.target.value)
}} type="text" placeholder="write your time"></input>
<button onClick={createRecipe}>create new recipe</button>
<p>{paragraph}</p>
</div>
</>
)
}

export default Recipes;