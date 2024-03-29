// components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Import the CSS file

function Header() {
  return (
    <header className='header'> {/* Add className here */}
      <h1 className='headerh1'>Pradeep.S</h1>

      <nav>
        <ul>
          <li><Link to="/about">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/Experience">About me </Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;


