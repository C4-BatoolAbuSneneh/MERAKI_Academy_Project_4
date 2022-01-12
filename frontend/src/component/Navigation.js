import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

const Navigation = ({isLogedIn,isAdmin}) => {
  return (
    <>
    {isLogedIn ? (
        <>
         {isAdmin?<Link className="Link3" to="/recipes">
        recipe
      </Link>:<></>}
      <Link className="Link4" to="/all">
        allRecipes
      </Link>
      <Link onClick={Login} to="/login" className="log">
              {" "}
                Logout{" "}
            </Link>{" "}
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
