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
        <br /> <br />
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="text"
          placeholder="your email"
          className="email"
        ></input>
        <br /> <br />
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          placeholder="your password"
          className="password"
        ></input>
        <br /> <br />
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
          login{" "}
        </button>
        <br />
        <p style={{ color: "black", fontSize: "25px", fontFamily: "fantasy" }}>
          {paragraph}
        </p>
        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
        <br /> <br /> <br /> <br /> <br /> <br />
      </div>
    </>
  );
};

export default Login;
