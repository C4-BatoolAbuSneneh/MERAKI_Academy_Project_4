import React, { useState } from "react";
import axios from "axios";

const Login = ({setToken, setIsLoggedIn}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [status, setStatus] = useState("")

  return (
    <>
      <input
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        type="text"
        placeholder="your email"
        className="email"
      ></input>
      <input
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        type="password"
        placeholder="your password"
        className="password"
      ></input>
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
              setParagraph("your login is successful");
            })
            .catch((err) => {
                setIsLoggedIn(false);
                setStatus(err.response.data.message);
              setParagraph("your email or password is not correct ");
            });
        }}
      >
        {" "}
        login{" "}
      </button>
      <p>{paragraph}</p>
    </>
  );
};

export default Login;
