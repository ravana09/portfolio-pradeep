// components/Header.js
import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Header() {
  return (
    <header className="header">
      {" "}
      {/* Use CSS class here */}
      <h1 className="header-h1">Pradeep.S</h1> {/* Use CSS class here */}
      <nav>
        <ul>
          <li>
            <Link to="/about">Home</Link>
          </li>
          <li>
            <Link to="/experience">About me</Link>
          </li>

          <li>
            <Link to="/skill">Skill</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          {/* Corrected path */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
