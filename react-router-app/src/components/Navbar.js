import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  let navigate = useNavigate();

  // const logout = () => {
  //   localStorage.removeItem("login");
  //   navigate.push("/");
  // };

  return (
    <nav className="py-2 bg-light border-bottom">
      <div className="container d-flex flex-wrap">
        <ul className="nav me-auto">
          <li className="nav-item">
            <Link
              to="/"
              className="nav-link link-dark px-2 active"
              aria-current="page"
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link link-dark px-2">
              About
            </Link>
          </li>
          <li className="nav-item">
            <a href="/todos" className="nav-link link-dark px-2">
              Todos
            </a>
          </li>
        </ul>
        <ul className="nav">
          <li className="nav-item">
            <Link to="/login" className="btn btn-primary mx-2" type="button">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <button
              className="btn btn-danger"
              onClick={() => {
                localStorage.removeItem("login");
                navigate("/");
              }}
            >
              Log Out
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
