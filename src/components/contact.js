// components/Contact.js
import React from "react";
import emailLogo from "../assests/maili.png";
import phoneLogo from "../assests/phone .png";
import linkedinIcon from "../assests/icons8-linkedin-50.png";
import githubIcon from "../assests/githubImage.png";

function Contact() {
  return (
    <section id="contact">
   
        <h5>Get in touch </h5>
        <h2>Contact me </h2>
        <form>
  <ul class="contact-list">
    <li>
      <a href="mailto:pradeep09sathish@gmail.com">
        <img class="maillogo" src={emailLogo} alt="Email" />
        pradeep09sathish@gmail.com
      </a>
    </li>
    <li>
      <a href="tel:+96298464464">
        <img class="maillogo" src={phoneLogo} alt="Phone" />
        96298464464
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/pradeep-s-8512a72a3/" target="_blank" rel="noopener noreferrer">
        <img class="Aboutlogo" src={linkedinIcon} alt="LinkedIn" />
        LinkedIn
      </a>
    </li>
    <li>
      <a href="https://github.com/ravana09" target="_blank" rel="noopener noreferrer">
        <img class="Aboutlogo" src={githubIcon} alt="GitHub" />
        GitHub
      </a>
    </li>
  </ul>
</form>

    </section>
  );
}

export default Contact;
