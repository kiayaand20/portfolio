import "./Intro.css";
import React from "react";

function Intro() {
  return (
    <div className="home-container">
      <div className="home-intro">
        <p className="home-name">Kiaya Anderson</p>
        <p className="home-title">SOFTWARE ENGINEER</p>
        <p className="home-paragraph">
          Self-motivated Software Engineer with a passion for
          <br /> building memorable digital experiences that encourage
          <br /> community, inclusivity, and knowledge.
        </p>
      </div>

      <div className="circles">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Intro;
