import React from "react";
import { Link } from "react-router-dom";
import profil from "../images/profile.jpg";
import "../App.css";

export default function Sidebar() {
  return (
    <>
      <div className="row sticky-top ">
        <aside className="bg-dark">
          <nav
            className="navbar navbar-expand-md navbar-dark bd-dark flex-md-column flex-row align-items-center py-2 text-center sticky-top "
            id="sidebar"
          >
            <div className="text-center p-3">
              <img
                src={profil}
                alt="My Awesome Image"
                className="img-fluid rounded-circle my-4 p-1 d-none d-md-block shadow center-cropped"
              />
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav flex-column w-100 justify-content-center">
                <li className="nav-item">
                  <Link className="nav-link" to="about">
                    About
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="experience">
                    Experience
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="education">
                    Education
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="skills">
                    Skills
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="interest">
                    Interest
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="awards">
                    Awards
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </aside>
      </div>
    </>
  );
}
