import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./component/Navigation";
import Register from "./component/Register";
import Login from "./component/Login";
import Recipes from "./component/Recipes";
import AllRecipe from "./component/AllRecipes";
import MyFavourite from "./component/MyFavourite";
import About from "./component/About";
function App() {
  let [token, setToken] = useState("");
  token = localStorage.getItem("token");

  const [isLogedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  return (
    <div className="App">
      <Navigation
        isLogedIn={isLogedIn}
        isAdmin={isAdmin}
        setIsAdmin={setIsAdmin}
        setIsLoggedIn={setIsLoggedIn}
      />
      <>
      
      </>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route
          path="/login"
          element={
            <Login
              setIsLoggedIn={setIsLoggedIn}
              setIsAdmin={setIsAdmin}
              setToken={setToken}
            />

          }   

        />  
           <Route path="/about" element={<About />} /> 

        <Route
          path="/recipes"
          element={isAdmin ? <Recipes token={token} /> : <p>Not Admin</p>}
        />
        <Route
          path="/all"
          element={<AllRecipe token={token} isAdmin={isAdmin} />}
        />
        <Route path="/my" element={<MyFavourite token={token} />} />
      </Routes>
    </div>
  );
}
export default App;
