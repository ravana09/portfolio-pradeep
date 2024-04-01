import React from 'react';
import '../App.css';
import linkedinIcon from '../assests/icons8-linkedin-50.png'; 
import githubIcon from '../assests/githubImage.png'
import AboutImage from '../assests/aboutImage.png'
import { Link } from 'react-router-dom';



function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div >
          <img className='aboutImg' src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToFqQqdcG7zPtLiCRKA_5JFf3QnLgkCc330A&usqp=CAU"alt="avatar" />
        </div>
        <div className="text-container">
          <h2>Pradeep</h2>
          <p>
            Full Stack Developer 
          </p>
        

          <div>
            <button className='aboutButton'>
              Download CV
            </button>
            <button className='aboutContactButton'>
            <Link to="/contact" >Contact</Link> 
            </button>
          </div>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/pradeep-s-8512a72a3/" target="_blank" rel="noopener noreferrer">
            <img  className='Aboutlogo' src={linkedinIcon} alt="LinkedIn" />
            

            </a>
            <a href="https://github.com/ravana09" target="_blank" rel="noopener noreferrer">
            <img className='Aboutlogo' src={githubIcon} alt="GitHub" />

            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;


