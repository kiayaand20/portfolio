import "./Footer.css";
import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="logo">
        <p> &copy; Kiaya Anderson | 2022</p>
      </div>

      <div className="contact-info-imgs">
        <a href="mailto: kiayaanderson89@gmail.com" className="gmail">
          <img
            src="https://res.cloudinary.com/kacloud20/image/upload/c_scale,w_40/v1642885321/Portfolio/Gmailimg_dpbucx.png"
            alt="gmail-img"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/kiayaanderson/"
          className="linked-in"
        >
          <img
            src="https://icongr.am/devicon/linkedin-original.svg?size=40&color=currentColor"
            alt="linked-in-img"
          />
        </a>
        <a href="https://github.com/kiayaand20" className="github">
          <img
            src="https://icongr.am/devicon/github-original.svg?size=40&color=currentColor"
            alt="github-img"
          />
        </a>
      </div>
    </div>
  );
}

export default Footer;
