import React, {useState} from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./component/Navigation";
import Register from "./component/Register";
import Login from "./component/Login";
import Recipes from "./component/Recipes"
import AllRecipe from "./component/AllRecipes";
function App() {
  const [token, setToken] = useState("");
  const [isLogedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <Navigation isLogedIn={isLogedIn} />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setToken={setToken} />} />
        <Route path="/recipes" element={<Recipes token={token} />} />
        <Route path="/all" element={<AllRecipe token={token} />} />

      </Routes>
    </div>
  );
}
export default App;