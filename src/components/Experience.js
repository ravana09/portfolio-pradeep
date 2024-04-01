// components/About.js
import React from "react";
import Education from "../assests/education.png"

function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <form className="AboutMeForm">
          <ul >
            <li><img className="educationlogo" src={Education} alt="education_logo"/>B.sc Chemistry</li>
          </ul>
        </form>
      <div>
        <div  className="pic">
        <img src="https://wallpapers.com/images/hd/luffy-3200-x-1800-picture-ao6tt30yuxjuvjlk.jpg" alt="luffy image "></img>
      
        </div>
      <div className="introduction ">
       
      <p>
         I am Pradeep, from Salem. I am
        a chemistry graduate from Bharathidasan University, and I also completed
        a diploma in health inspector course at Excel College of Health Science.
        I have an intense interest in software programming. To
        follow my interest, I’ve signed up for the Guvi to pursue my interest .
        I’ve finished my certified Mern stack development course at Guvi, which
        is incubated with IIT Madras. My goal is to Build a successful career as
        a software programmer. I have technical expertise in web development,
        software development, frameworks, HTML, CSS, JavaScript, mongodb,react
        js and node js. 
      </p>
      </div>
      </div>
    </section>
  );
}

export default About;
