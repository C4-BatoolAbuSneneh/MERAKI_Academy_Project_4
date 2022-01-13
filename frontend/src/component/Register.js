import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [firstName, setFirstName] = useState(" ");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [country, setCountry] = useState("");
  const [paragraph, setParagraph] = useState("");
  return (
    <>
      <div className="registerpage">
        <br /> <br />
        <input
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          type="text"
          placeholder="Your First Name"
        ></input>
        <br /> <br />
        <input
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          type="text"
          placeholder="Your Last Name"
        ></input>
        <br /> <br />
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          placeholder="Your Email"
        ></input>
        <br /> <br />
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          placeholder="Your Password"
        ></input>
        <br /> <br />
        <input
          onChange={(e) => {
            setAge(e.target.value);
          }}
          type="text"
          placeholder="Your Age"
        ></input>
        <br /> <br />
        <input
          onChange={(e) => {
            setCountry(e.target.value);
          }}
          type="text"
          placeholder="Your Country"
        ></input>
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
                age,
                country,
              })
              .then((result) => {
                setParagraph("The user has been created successfully");
              })
              .catch((err) => {
                setParagraph("Error happened while register, please try again");
              });
          }}
        >
          Register
        </button>
        <br />
        <p style={{ color: "black", fontSize: "25px", fontFamily: "fantasy" }}>
          {paragraph}
        </p>
        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      </div>
    </>
  );
};

export default Register;
