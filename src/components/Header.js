import React from "react";
// import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll"; // Import ScrollLink from react-scroll
import "../Css/Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";


function Header() {
  return (
    <>
  
    <Navbar expand="lg"  className="Header_Body" fixed="top" >
        <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          
          <Nav className="ms-auto">
          <ScrollLink to="about" smooth={true} duration={100} className="nav-link" style={{color:"white",fontSize:"larger"}}>
            Home
            </ScrollLink>
            <ScrollLink to="experience" smooth={true} duration={100} className="nav-link" style={{color:"white",fontSize:"larger"}}>
              About me
            </ScrollLink>
            <ScrollLink to="skill" smooth={true} duration={100} className="nav-link" style={{color:"white",fontSize:"larger"}}>
              Skill
            </ScrollLink>
            <ScrollLink to="projects" smooth={true} duration={100} className="nav-link" style={{color:"white",fontSize:"larger"}}>
              Projects
            </ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={100} className="nav-link" style={{color:"white",fontSize:"larger"}}>
              Contact
            </ScrollLink>
            
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
     {/* <header className="header">
    
      <nav>
        <ul>
          <li>
          <ScrollLink to="about" smooth={true} duration={500}>
            Home
            </ScrollLink>
          </li>
       
          <li>
            
            <ScrollLink to="experience" smooth={true} duration={500}>
              About me
            </ScrollLink>
          </li>
          <li>
            
            <ScrollLink to="skill" smooth={true} duration={500}>
              Skill
            </ScrollLink>
          </li>
          <li>
            
            <ScrollLink to="projects" smooth={true} duration={500}>
              Projects
            </ScrollLink>
          </li>
          <li>
            
            <ScrollLink to="contact" smooth={true} duration={500}>
              Contact
            </ScrollLink>
          </li>
        </ul>
      </nav>
    </header> */}
    </>
   
  );
}

export default Header;

