import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";

const Navigation = ({ isLogedIn, isAdmin, setIsAdmin, setIsLoggedIn }) => {
  const navigate = useNavigate();
  const handelLogout = () => {
    localStorage.removeItem("token");
    setIsAdmin(false);
    setIsLoggedIn(false);
    navigate("/login");
  };
  const token = localStorage.getItem("token");
  return (
    <>
      {isLogedIn || token ? (
        <>
          {isAdmin ? (
            <Link  className="recipe" to="/recipes">
              NewRecipe
            </Link>
          ) : (
            <></>
          )}
          <Link  className="allrecipe" to="/all">
            All
          </Link>
          <Link className="my" to="/my">
            MyFavourite
          </Link>
          <Link className="about" to="/about">
            About
          </Link>
          <Link className="logout" onClick={handelLogout} to="/login">
            {" "}
            Logout{" "}
          </Link>{" "}
        </>
      ) : (
        <>
          <Link className="register" to="/register">
            Register
          </Link>
          <Link className="login" to="/login">
          Sign In
          </Link>
        </>
      )}
    </>
  );
};

export default Navigation;
