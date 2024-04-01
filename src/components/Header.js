import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll"; // Import ScrollLink from react-scroll
import "../App.css";


function Header() {
  return (
    <header className="header">
      <h1 className="header-h1">Pradeep.S</h1>
      <nav>
        <ul>
          <li>
            <Link to="/about">Home</Link>
          </li>
       
          <li>
            
            <ScrollLink to="experience" smooth={true} duration={500}>
              About me
            </ScrollLink>
          </li>
          <li>
            {/* Replace Link with ScrollLink */}
            <ScrollLink to="skill" smooth={true} duration={500}>
              Skill
            </ScrollLink>
          </li>
          <li>
            {/* Replace Link with ScrollLink */}
            <ScrollLink to="projects" smooth={true} duration={500}>
              Projects
            </ScrollLink>
          </li>
          <li>
            {/* Replace Link with ScrollLink */}
            <ScrollLink to="contact" smooth={true} duration={500}>
              Contact
            </ScrollLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

