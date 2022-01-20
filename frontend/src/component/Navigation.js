import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Navigation = ({ isAdmin, setIsAdmin, setIsLoggedIn }) => {
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
          <div style={{ background: "rgb(127, 204, 49)", padding: "0px 12px"
}}>
           
           <Link className="allrecipe" to="/all">
              HOME
            </Link> 
            <Link className="my" to="/my">
             Favourite
            </Link> 
            
             {isAdmin ? (
              <Link className="recipe" to="/recipes">
                NewRecipe
              </Link>
            ) : (
              <></>
            )}
           
             <Link className="logout" onClick={handelLogout} to="/login">
              {" "}
              Logout{" "}
            </Link>{" "}
            <Link className="register" to="/register">
              Register
            </Link>
            <Link className="login" to="/login">
              Sign In
            </Link>
      </div>
    </>
  );
};

export default Navigation;
