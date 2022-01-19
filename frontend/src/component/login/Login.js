import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Login.css";
import GoogleLogin from "react-google-login";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";

// RiLockPasswordLine
const Login = ({ setIsLoggedIn, setIsAdmin, isLogedIn }) => {
  let [token, setToken] = useState("");
  token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [status, setStatus] = useState("");
  const responseGoogle = (response) => {
    // let token = localStorage.getItem("token");
    // console.log(token);
    // localStorage.removeItem("token");
    token = response.tokenObj.id_token;
    console.log(token);
    setToken(token);
    setIsLoggedIn(true);
    localStorage.setItem("token", token);
    navigate("/all");
    // console.log(response)
    // console.log(response.profileObj);
  };
  useEffect(() => {
    if (isLogedIn) {
      navigate("/all");
    }
  }, []);
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
          <AiOutlineMail
            style={{ transform: "translate(12%,18px)", fontSize: "20px" }}
          />
          <br /> <br />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder=" Password"
            className="email"
          ></input>
          <RiLockPasswordLine
            style={{ transform: "translate(12%,18px)", fontSize: "20px" }}
          />
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
                  localStorage.setItem("token", result.data.token);
                  navigate("/all");
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
        <div>
          <GoogleLogin
            clientId="283722334678-kbur3kpoiecrf3di1rmemvdqrht1jtf4.apps.googleusercontent.com"
            buttonText="sign in with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
            className="google"
          ></GoogleLogin>
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
    </>
  );
};

export default Login;
