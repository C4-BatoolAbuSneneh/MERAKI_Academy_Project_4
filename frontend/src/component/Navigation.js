import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
// class Question extends React.Component {
//   render() {
//     return <h3> Lets go for a <FaBeer />? </h3>
//   }
// }
// import { IconName } from "react-icons/fa";

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
      <div className="img1">
        {" "}
        <img
          className="logo1"
          src="https://foodrecipes.inspirythemes.com/bootstrap/wp-content/uploads/sites/3/2015/12/logo1.png"
          alt="logo1"
        ></img>
        <div className="div"></div>
        <img
          className="logo"
          src="https://foodrecipes.inspirythemes.com/bootstrap/wp-content/themes/inspirythemes-food-recipes/images/header-image.png"
          alt="logo1"
        ></img>
      </div>

      {isLogedIn || token ? (
        <>
          <div style={{ background: "rgb(127, 204, 49)" }}>
            {isAdmin ? (
              <Link className="recipe" to="/recipes">
                NewRecipe
              </Link>
            ) : (
              <></>
            )}
            <Link className="allrecipe" to="/all">
              All
            </Link>
            <Link className="my" to="/my">
              MyFavourite
            </Link>
            <Link className="logout" onClick={handelLogout} to="/login">
              {" "}
              Logout{" "}
            </Link>{" "}
          </div>
        </>
      ) : (
        <>
          <div style={{ background: "rgb(127, 204, 49)" }}>
            <Link className="register" to="/register">
              Register
            </Link>
            <Link className="login" to="/login">
              Sign In
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default Navigation;
