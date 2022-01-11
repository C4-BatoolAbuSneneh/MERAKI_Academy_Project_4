import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Navigation from "./component/Navigation";
import Register from "./component/Register";
import Login from "./component/Login";
import Recipe from "./component/Recipe";
function App() {
  const [token, setToken] = useState("");
  const [isLogedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <Navigation isLogedIn={isLogedIn} />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/recipe" element={<Recipe token={token} />} />
      </Routes>
    </div>
  );
}
export default App;