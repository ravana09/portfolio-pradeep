import React from 'react';
import '../App.css';
import AboutImage from'../assests/sample/aboutImage.png'
import linkedinIcon from '../assests/icons8-linkedin-50.png'; 
import githubIcon from '../assests/githubImage.png';
import resumeFile from '../assests/pradeep-resume.pdf'; // Import your resume file
import { Link } from 'react-router-dom';

function About() {

  // Function to handle the download
  const handleDownload = () => {
    // Create a new anchor element
    const link = document.createElement('a');
    // Set the href attribute to the URL of the resume file
    link.href = resumeFile;
    // Set the download attribute to force download
    link.setAttribute('download', 'Pradeep-resume.pdf');
    // Append the anchor element to the body
    document.body.appendChild(link);
    // Trigger a click event on the anchor element
    link.click();
    // Remove the anchor element from the body
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div>
          <img className='aboutImg' src={AboutImage} alt="avatar" />
        </div>
        <div className="text-container">
          <h2>Pradeep</h2>
          <p>
            Full Stack Developer 
          </p>
          <div>
            {/* Attach handleDownload function to the onClick event */}
            <button className='aboutButton' onClick={handleDownload}>
              Download CV
            </button>
            <button className='aboutContactButton'>
              <Link to="/contact">Contact</Link> 
            </button>
          </div>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/pradeep-s-8512a72a3/"  rel="noopener noreferrer">
              <img className='Aboutlogo' src={linkedinIcon} alt="LinkedIn" />
            </a>
            <a href="https://github.com/ravana09"  rel="noopener noreferrer">
              <img className='Aboutlogo' src={githubIcon} alt="GitHub" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;



