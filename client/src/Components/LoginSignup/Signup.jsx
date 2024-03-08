import React, { useState } from "react";
import "./LS.css";
import user_icon from "../Assets/user.png";
import password_icon from "../Assets/key.png";
import email_icon from "../Assets/mail.png";
import phone_icon from "../Assets/phone.png";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";


export const Signup = () => {
  const [action, setAction] = useState("SignUp");
  const [name, setName] = useState("");
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [number, setNumber] = useState();
  const navi= useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/signup", { name, email, number, password})
      .then((res) => {
        console.log(res)
        navi('/login')
      })
      .catch(err => console.log(err));
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
            <img src={user_icon} alt="" width={20} height={20} />
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <br />
          <div className="input">
            <img src={email_icon} alt="" width={20} height={20} />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <br />
          <div className="input">
            <img src={phone_icon} alt="" width={20} height={20} />
            <input className="num"
              type="number"
              placeholder="Contact Info"
              onChange={(e) => setNumber(e.target.value)}
              required
            />
          </div>
          <br />
          <div className="input">
            <img src={password_icon} alt="" width={20} height={20} />
            <input
              type="password"
              name="password"
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
        <div className="submit-container">
          <button className="submit" >Sign Up</button>
          <Link to="/login">
          <button className="lg" >Log In</button>
          </Link>
        </div>
        </div>
    </form>
  );
};

export default Signup;
