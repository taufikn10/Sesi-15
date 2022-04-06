import React from "react";
import "../App.css";
import triangle from "../images/tringle.png";
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import Interest from "./Interest";
import Awards from "./Awards";

export default function Home() {
  return (
    <>
      <div id="home" className="bg-none center">
        <br />
        <div className="about-right">
          <h1 className="text-white mb-4">
            <b>Welcome</b>
          </h1>
          <p className="p-first text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
            nesciunt sint, esse iure eius voluptatibus perspiciatis sequi fuga
            magni perferendis beatae ratione, nam culpa veritatis dolore sunt ut
            minus qui Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Cum ea delectus doloremque adipisci autem deleniti non nostrum,
            suscipit soluta perferendis.
          </p>
          <h3 className="color-3 social-link-text">
            <button className="btn btn-danger">Hire Me</button>
          </h3>

          <ul className="about-link">
            <li>
              <a href="">
                <i className="fa fa-fonticons"></i>
              </a>
            </li>

            <li>
              <a href="">
                <i className="fa fa-envira"></i>
              </a>
            </li>

            <li>
              <a href="">
                <i className="fa fa-reddit-alien"></i>
              </a>
            </li>

            <li>
              <a href="">
                <i className="fa fa-dribbble"></i>
              </a>
            </li>

            <li>
              <a href="">
                <i className="fa fa-youtube-play"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* <About />
      <Experience />
      <Education />
      <Skills />
      <Interest />
      <Awards /> */}
    </>
  );
}
