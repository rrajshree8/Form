import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Signup from "./Components/LoginSignup/Signup";
import Home from "./Components/HomePage/home";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/LoginSignup/Login";
import Next from "./Components/LoginSignup/next";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/next" element={<Next />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
