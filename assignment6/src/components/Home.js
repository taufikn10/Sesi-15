import React from "react";
import "../App.css";

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
    </>
  );
}
