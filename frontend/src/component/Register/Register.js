import React, { useState } from "react";
import axios from "axios";
import "./Register.css";
const Register = () => {
  const [firstName, setFirstName] = useState(" ");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [paragraph, setParagraph] = useState("");
  return (
    <>
      <br /> <br />
      <div className="registerpage">
        <br />
        <div>
          <h1
            style={{
              height: "1.3em",
              width: "90%",
              textAlign: "center",
              color: "grey",
              fontFamily: "initial",
              fontStyle: "italic",
            }}
          >
            Daily Recipe
          </h1>
          <h3
            style={{
              width: "90%",
              textAlign: "center",
              color: "grey",
              fontFamily: "sans-serif",
            }}
          >
            Register
          </h3>
          <br />
        </div>
        <div className="input2">
          <input
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            type="text"
            placeholder=" First Name"
            className="email1"
          ></input>
          <br /> <br />
          <input
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            type="text"
            placeholder=" Last Name"
            className="email1"
          ></input>
          <br /> <br />
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder=" Email Address"
            className="email1"
          ></input>
          <br /> <br />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder=" Password"
            className="email1"
          ></input>
          <br /> <br />
        </div>
        <br />
        <br />
        <button
          onClick={() => {
            axios
              .post("http://localhost:5000/users", {
                firstName,
                lastName,
                email,
                password,
              })
              .then((result) => {
                setParagraph("The user has been created successfully");
              })
              .catch((err) => {
                setParagraph("Error happened while register, please try again");
              });
          }}
          className="buttonregister"
        >
          Register
        </button>
        <p
          style={{
            color: "rgb(127, 204, 49)",
            fontFamily: "verdana",
            fontSize: "25px",
            padding: "30px",
            width: "87%",
            textAlign: "center",
          }}
        >
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default Register;
