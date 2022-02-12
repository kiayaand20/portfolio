import './Nav.css'
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const alwaysOptions = (
  <>
    <NavLink className="link" to="/">
      Home
    </NavLink>
    <NavLink className="link" to="/about">
      About
    </NavLink>
    <NavLink className="link" to="/projects">
      Projects
    </NavLink>
    <NavLink className="link" to="/contact">
      Contact
    </NavLink>
    <a href="https://drive.google.com/file/d/18zqJBot16OykCqDeufbUY07sJUzKss5O/view?usp=sharing"
        rel="noreferrer" target="_blank" className='link'><Link to='/resume'>
        </Link>Resume</a>
  </>
);

function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

  return (
    <nav className='navbar'>
      <div className="links">{alwaysOptions}</div>
        <div className="curtain">
          <div className="curtainBtn">
            <button className="menuBtn" onClick={toggleMenu}>
              Menu
            </button>
          </div>

          <div className={`overlay ${menuOpen ? " showMenu" : ""}`}>
            <button className="overlayBtn" onClick={toggleMenu}>
              X
            </button>
            <div className="overlay-content">
              {alwaysOptions}
            </div>
          </div>
        </div>
    </nav>
  )
}

export default Nav