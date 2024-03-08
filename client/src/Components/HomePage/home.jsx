import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="homecss">
        <h1>HOME</h1>
        <div className="ls">
          <Link to="/signup" className="link">
            <button className="btn">Sign Up</button>
          </Link>
          <Link to="/login" className="link">
            <button className="btn">Login</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
