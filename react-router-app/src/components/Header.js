import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <>
      <Navbar />
      <header className="py-3 mb-4 border-bottom">
        <div className="container d-flex flex-warp justify-content-between">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none"
          >
            <span className="fs-4">My First React App</span>
          </a>
        </div>
      </header>
    </>
  );
}

export default Header;
