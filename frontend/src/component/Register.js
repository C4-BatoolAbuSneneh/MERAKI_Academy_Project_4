import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [firstName, setFirstName] = useState(" ");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [paragraph, setParagraph] = useState("");
  return (
    <>
      <br /> <br />
      <div
        className="registerpage"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <br />
        <div>
          <h1
            style={{
              height: "1.3em",
              width: "90%",
              textAlign: "center",
              color: "white",
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
              color: "white",
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
            placeholder="Your First Name"
            className="email1"
          ></input>
          <br /> <br />
          <input
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            type="text"
            placeholder="Your Last Name"
            className="email1"
          ></input>
          <br /> <br />
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Your Email"
            className="email1"
          ></input>
          <br /> <br />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Your Password"
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
            color: "white",
            fontSize: "25px",
            fontFamily: "monospace",
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
