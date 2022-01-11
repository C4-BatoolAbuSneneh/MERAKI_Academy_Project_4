import React, {useState} from "react";
import axios from "axios";
const Recipe = () => {
    const [image, setImage]  = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [time, setTime] = useState("");
    return (
<>
<div className="">
<image  onChange={(e) => {
    setImage(e.target.value)
}} ></image>
<input onChange={(e) => {
    setTitle(e.target.value)
}} type="text" placeholder="write your title"></input>
<textarea onChange={(e) => {
    setDescription(e.target.value)
}} type="text" placeholder="write your title"></textarea>
<input onChange={(e) => {
    setTime(e.target.value)
}} type="text" placeholder="write your time"></input>
<button onClick={()=> {
axios.post("http://localhost:5000/recipes", {
    image,title,description,time
})
}}>add new recipe</button>


</div>
</>

    )
}

export default Recipe;