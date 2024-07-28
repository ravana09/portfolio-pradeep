import React from "react";
import "../Css/About.css";
import AboutImage from "../assests/sample/aboutImage.png";
import linkedinIcon from "../assests/icons8-linkedin-50.png";
import githubIcon from "../assests/githubImage.png";
import resumeFile from "../assests/Pradeep-Resume.pdf"; // Import your resume file
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { Typewriter } from "react-simple-typewriter";

function About() {
  // Function to handle the download
  const handleDownload = () => {
    const link = document.createElement("a");

    link.href = resumeFile;

    link.setAttribute("download", "Pradeep-Resume.pdf");

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };

  return (
    <>
    <div className="ABout_Row ">
      <Row  id="about">
        <Col sm={0} md={2} lg={2} xl={2}>
          {" "}
        </Col>

        <Col sm={12} md={4} lg={4} xl={4}>
          {" "}
          <div className="text-container">
            <div className="about-content">
              <div >
                <div
                  className="About_Hello line"
                  style={{ fontSize: "60px",marginRight:'80px' }}
                >
                  Hello !!
                </div>
                <div className="About_Hello line" style={{ fontSize: "50px" ,backgroundColor:"grey"}}>
                  I'm <span className="About_Pradeep">Pradeep.</span>
                </div>
                <div className="About_Hello line" style={{ fontSize: "20px" ,backgroundColor:"grey"}}>
                  Mern Stack Developer
                </div>
                <div className="About_Hello line" >
              
              <button className="aboutButton About_Hello line" onClick={handleDownload}>
                Download CV
              </button>
          
              <button className="aboutContactButton About_Hello line">
                <Link to="/contact">Contact</Link>
              </button>
              </div>
              <div className="line">
              <div style={{ whiteSpace: "pre-wrap" }}  className='About_Details'>
          <Typewriter
         
        
            words={[
              `Enthusiastic MERN stack developer with foundational knowledge in MongoDB, Express.js, React, and Node.js. Recently completed hands-on projects that involved developing full-stack applications, including building responsive user interfaces with React, creating RESTful APIs with Express.js, and managing data with MongoDB. Eager to apply my skills in a professional setting and contribute to dynamic development teams with a strong commitment to learning and growth.`
            ]}
            loop={1}
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={0}
            delaySpeed={1000}
          />
        </div>

              </div>
              </div>
            </div>

            
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/in/pradeep-s-8512a72a3/"
                rel="noopener noreferrer"
              >
                <img className="Aboutlogo" src={linkedinIcon} alt="LinkedIn" />
              </a>
              <a href="https://github.com/ravana09" rel="noopener noreferrer">
                <img className="Aboutlogo" src={githubIcon} alt="GitHub" />
              </a>
            </div>
          </div>
        </Col>
        <Col sm={12} md={4} lg={4} xl={4}>
          <img className="aboutImg" src={AboutImage} alt="avatar" />
        </Col>
        <Col sm={0} md={2} lg={2} xl={2}></Col>
      </Row>
      </div>
    </>
  );
}

export default About;
