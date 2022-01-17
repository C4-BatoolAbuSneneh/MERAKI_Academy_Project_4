import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ setToken, setIsLoggedIn, setIsAdmin }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [status, setStatus] = useState("");
  return (
    <>
      <br /> <br />
      <div className="loginpage">
        <br />
        <div>
          <h1
            style={{
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
            Sign In
          </h3>
        </div>
        <div className="ee">
          <br />
          <br />
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="text"
            placeholder=" Email Address"
            className="email"
          ></input>
          <br /> <br />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder=" Password"
            className="email"
          ></input>
          <br /> <br /> <br />
          <button
            onClick={() => {
              axios
                .post("http://localhost:5000/login", {
                  email,
                  password,
                })
                .then((result) => {
                  setIsLoggedIn(true);
                  setToken(result.data.token);
                  navigate("./all");
                  localStorage.setItem("token", result.data.token);
                  setIsAdmin(result.data.role === "ADMIN");
                })
                .catch((err) => {
                  setIsLoggedIn(false);
                  setStatus(err.response.data.message);
                  setParagraph("Your email or password is not correct ");
                });
            }}
            className="loginbutton"
          >
            {" "}
            Sign In{" "}
          </button>
        </div>
        <br />
        <p
          style={{
            color: "rgb(127, 204, 49)",
            fontSize: "25px",
            fontFamily: "verdana",
            padding: "30px",
            width: "87%",
            textAlign: "center",
          }}
        >
          {paragraph}
        </p>
      </div>
      <br /> <br /> <br />
    </>
  );
};

export default Login;
