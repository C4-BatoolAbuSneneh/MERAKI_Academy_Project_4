import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Navigation from "./component/Navigation";
import Register from "./component/Register";
import Login from "./component/Login";
function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
export default App;