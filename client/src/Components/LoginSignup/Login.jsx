import "./LS.css";
import password_icon from "../Assets/key.png";
import email_icon from "../Assets/mail.png";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [action, setAction] = useState("LogIn");
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navi= useNavigate();

  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios
      .post("http://localhost:3000/login", {email, password})
      .then((res) => {
        console.log(res)
        if(res.data==="Success"){
          navi('/next')
        }
      })
      .catch((err) => console.log(err));
  };


  return (
    <form onSubmit={handleSubmit}>
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
      <div className="input">
            <img src={email_icon} alt="" width={20} height={20} />
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            </div>
            <div className="input">
            <img src={password_icon} alt="" width={20} height={20} />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          </div>
      <div className="forgot-password">
        Lost Password?
        <span>Click Here!</span>
      </div>
      {/* <div className="submit-container">
    <div className={action==="Sign Up"? "submit gray":"submit"} onClick={()=>{setAction("Log In")}}>Log In</div>
    </div> */}
      <div className="submit-container">
        <button className="btn">Log In</button>
      </div>
    </div>
    </form>
  );
};

export default Login;
