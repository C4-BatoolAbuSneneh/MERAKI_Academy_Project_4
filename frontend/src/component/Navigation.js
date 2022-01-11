import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({isLogedIn}) => {
  return (
    <>
    {isLogedIn ? (
        <>
         <Link className="Link3" to="/recipes">
        recipe
      </Link>
      <Link className="Link4" to="/all">
        allRecipes
      </Link>
        </>
    ) : (
        <>
           <Link className="Link" to="/register">
        Register
      </Link>
      <Link className="Link2" to="/login">
        login
      </Link>
        </>
    )}
    </>
  );
};

export default Navigation;
