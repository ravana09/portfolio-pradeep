import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import pic1 from "../assests/sample/IphoneImage.jpg";
import pic2 from "../assests/sample/wallpaperflare.com_wallpaper (2).jpg";
import pics from "../assests/sample/dictinary.avif";

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className='project-container'>
        <div className='projectClass'>
          <div className="project-card">
            <img src={pic1} alt="pic1" />
            <div className="project-details">
              <h5>Apple online store</h5>
              
              <div className="project-links">
                <button><a href="https://github.com/ravana09/contex.git" rel="noopener noreferrer">GitHub</a></button>
                <button><a href="https://peppy-fenglisu-b2a745.netlify.app/"  rel="noopener noreferrer">Live Demo</a></button>
              </div>
            </div>
          </div>
        </div>
        <div className='projectClass'>
          <div className="project-card">
            <img src={pic2} alt="pic2" />
            <div className="project-details">
              <h5>Project 2</h5>
              
              <div className="project-links">
                <button><a href="https://github.com/ravana09/AsyncDay-5-dictionary-.git"  rel="noopener noreferrer">GitHub</a></button>
                <button><a href="https://astounding-fox-aed2cc.netlify.app"  rel="noopener noreferrer">Live Demo</a></button>
              </div>
            </div>
          </div>
        </div>
        <div className='projectClass'>
          <div className="project-card">
          <img src={pics} alt="pic1" />
            <div className="project-details">
              <h5>Dictionary</h5>
              
              <div className="project-links">
                <button><a href="https://github.com/ravana09/AsyncDay-5-dictionary-.git"  rel="noopener noreferrer">GitHub</a></button>
                <button><a href="https://astounding-fox-aed2cc.netlify.app"  rel="noopener noreferrer">Live Demo</a></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;




