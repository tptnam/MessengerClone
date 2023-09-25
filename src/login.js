import React from "react";
import GoogleButton from "react-google-button";
import { Link } from "react-router-dom";
import "./App.css";

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <img
          src="asset/Facebook-Messenger-Logo-PNG-High-Quality-Image.png"
          alt="logo"></img>
        <h1 className="logo">Welcome to Messenger</h1>
        <span className="title">
          The simple way to text, call and video chat right from your desktop
        </span>
        {/* <form>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Sign in</button>
        </form> */}
        <GoogleButton />
        <p>
          You don't have an account?{" "}
          <Link style={{ color: "rgb(50, 168, 166)" }} to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
