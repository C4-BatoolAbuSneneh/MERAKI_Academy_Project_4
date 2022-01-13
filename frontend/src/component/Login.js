import React, { useState } from "react";
import axios from "axios";

const Login = ({ setToken, setIsLoggedIn, setIsAdmin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [status, setStatus] = useState("");
  return (
    <>
      <div className="loginpage">
        <br/>
      {/* <img style={{ width: "200px" }} src={""} /> */}
<div style={{backgroundColor:"rgba(0, 0, 0, 0.5)"}}>
        <h1 style={{height:"1.3em",width:"90%",textAlign:"center",color:"white", fontFamily:"initial", fontStyle:"italic"}}>Daily Recipe</h1>
        <h3 style={{width:"90%",textAlign:"center",color:"white", fontFamily:"sans-serif"}}>Sign In</h3>
        </div>
        <div className="ee">
        <br/><br/>
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
        <br /> <br />  <br />
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
                setParagraph("Your login is successful");
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
        <p style={{ color: "white", fontSize: "25px", fontFamily: "monospace", textAlign:"center"}}>
          {paragraph}
        </p>
        {/* <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
        <br /> <br /> <br /> <br /> <br /> <br /> */}
      </div>
    </>
  );
};

export default Login;
