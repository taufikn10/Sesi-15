import React from "react";
import "../App.css";

export default function Education() {
  return (
    <>
      <div id="education" className="bg-secondary text-white center">
        <h1>Education</h1>
        <div className="education">
          <div className="d-flex">
            <p className="me-1 fw-bold">State University of Surabaya -</p>
            <p>Surabaya, Indonesia</p>
          </div>
          <p>Informatics Management, 3.75/4.00 | August 2019 - Present</p>
        </div>
        <ul className="square">
          <li>
            Learn hard skills of various programming languages into websites,
            desktop applications, mobile applications to apply them to the final
            project.
          </li>
          <li>
            Learn soft skills of communication, time management, working with
            group members to create various applications.
          </li>
        </ul>
        <div className="education">
          <div className="d-flex">
            <p className="me-1 fw-bold">SMAN 1 Nganjuk -</p>
            <p>Nganjuk, Indonesia</p>
          </div>
          <p>Mathematics and Natural Science | July 2016 - May 2019</p>
        </div>
      </div>
    </>
  );
}
