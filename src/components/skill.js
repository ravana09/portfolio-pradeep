// components/About.js

import React, { useRef } from "react";
import Html from "../assests/icons/html.png";
import css from "../assests/icons/css logo.png";
import js from "../assests/icons/js.png";
import react from "../assests/icons/react.png";
import git from "../assests/icons/git.png";
import bootstrap from "../assests/icons/bootstrap.png";
import sql from "../assests/icons/sql.png";
import node from "../assests/icons/node.png";
import express from "../assests/icons/express.png";
import Mongodb from "../assests/icons/momgodb.png";
import Mysql from "../assests/icons/mySql.png";
import Aws from "../assests/icons/aws.png";
import oracle from "../assests/icons/oracle-icon.svg";



function skill() {


    
    return (<section id="experience">
    <p class="section__text__p1">Explore My</p>
    <h1 class="title">Skills</h1>
    <div class="experience-details-container">
      <div class="about-containers">
        <div class="details-container">
          <h2 class="experience-sub-title">Frontend Development</h2>
          <div class="article-container">
            <article>
              <img src={Html} alt="Experience icon" class="icon"/>
              <div>
                <h3>HTML</h3>
                <p>Experienced</p>
              </div>
            </article>
            <article>
              <img src={css} alt="Experience icon" class="icon"/>
              <div>
                <h3>CSS</h3>
                <p>Experienced</p>
              </div>
            </article>
            <article>
              <img src={js} alt="Experience icon" class="icon"/>
              <div>
                <h3>JavaScript</h3>
                <p>Experienced</p>
              </div>
            </article>
            <article>
              <img src={bootstrap} alt="Experience icon" class="icon"/>
              <div>
                <h3>Bootstarp</h3>
                <p>Experienced</p>
              </div>
            </article>
            <article>
              <img src={react} alt="Experience icon" class="icon"/>
              <div>
                <h3>React</h3>
                <p>Intermediate</p>
              </div>
            </article>
          
            <article>
              <img src={git} alt="Experience icon" class="icon"/>
              <div>
                <h3>Git</h3>
                <p>Intermediate</p>
              </div>
            </article>
          </div>
        </div>

        <div class="details-container">
            <h2 class="experience-sub-title">Backend Development</h2>
            <div class="article-container">
              <article>
                <img src={sql}alt="Experience icon" class="icon"/>
                <div>
                  <h3>PostgreSQL</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img src={node}alt="Experience icon" class="icon"/>
                <div>
                  <h3>Node JS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src={express} alt="Experience icon" class="icon"/>
                <div>
                  <h3>Express JS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src={Mongodb}  alt="Experience icon" class="icon"/>
                <div>
                <h3>MongoDB</h3>
                 <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src={Mysql}  alt="Experience icon" class="icon"/>
                <div>
                  <h3>MySQL</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src={Aws}  alt="Experience icon" class="icon"/>
                <div>
                  <h3>AWS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img src={oracle}  alt="Experience icon" class="icon"/>
                <div>
                  <h3>oracle</h3>
                  <p>Intermediate</p>
                </div>
              </article>
             
             
            </div>
          </div>
        </div>
      </div>

    </section>
)}
    

  


export default skill;


