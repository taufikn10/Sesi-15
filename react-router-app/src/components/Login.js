import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  let navigate = useNavigate();

  let doLogin = () => {
    localStorage.setItem("login", "true");
    navigate("/");
  };

  return (
    <div className="mb-5">
      <h1>Login</h1>
      <p>This is just simple login</p>
      <p>click to login</p>
      <button className="btn btn-lg btn-primary" onClick={doLogin}>
        Login
      </button>
    </div>
  );
}
