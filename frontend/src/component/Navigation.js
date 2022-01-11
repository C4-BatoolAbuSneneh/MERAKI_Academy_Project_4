import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({isLogedIn,token}) => {
  return (
    <>
    {isLogedIn ? (
        <>
         <Link className="Link3" to="/recipe">
        recipe
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
