import React, {useState} from "react";
import axios from "axios";

const Register = () => {
    const [firstName, setFirstName] = useState(" ");
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [age, setAge] = useState("")
    const [country, setCountry] = useState("")
    const [paragraph, setParagraph] = useState("")
    return (
        <>
        <div className="register">
            <input onChange={(e) => {
                return setFirstName(e.target.value)
            }} type={"text"} placeholder="Your Last Name"></input>
            <input onChange={(e) => {
                return setLastName(e.target.value)
            }} type={"text"} placeholder="Your First Name"></input>
            <input onChange={(e) => {
                return setEmail(e.target.value)
            }} type={"email"} placeholder="Your Email"></input>
            <input onChange={(e) => {
                return setPassword(e.target.value)
            }} type={"password"} placeholder="Your Password"></input>
            <input onChange={(e) => {
                return setAge(e.target.value)
            }} type={"text"} placeholder="Your Age"></input>
            <input onChange={(e) => {
                return setCountry(e.target.value)
            }} type={"text"} placeholder="Your Country"></input>
            <button onClick={()=> {
                axios.post("http://localhost:5000/users", {
                    firstName,
                    lastName,
                    email,
                    password,
                    age,
                    country
                }).then((result) => {
                   { setParagraph("The user has been created successfully")}
                }).catch((err) => {
                    {setParagraph("Error happened while register, please try again")}
                })
            }}>Register</button>
            <p>{paragraph}</p>
            </div>    
        </>
    )
}

export default Register;