import React from "react";

import linkedinLogo from "../../media/Logos/linkedin.png";
import instagramLogo from "../../media/Logos/instagram.png";
import githubLogo from "../../media/Logos/github.png";
import gmailLogo from "../../media/Logos/gmail.png";
import whatsappLogo from "../../media/Logos/whatsapp.png";

import "./Contact.scss";

const Contact = () => (
  <footer id="allcontact">
    <div id="contact">
      <div className="mh5">
        <h1>CONTACT ME</h1>
        <p>Let's build the website of your dreams!</p>
        <a href="tel:+584129431812" aria-label="WhatsApp">
          <img alt="" src={whatsappLogo} className="icons" />
        </a>
        <a href="mailto:sergionava.dev@gmail.com" aria-label="Email">
          <img alt="" src={gmailLogo} className="icons" />
        </a>
      </div>

      <div className="mh5">
        <h1>SOCIAL MEDIA</h1>
        <p>Feel free to stop by and say hello!</p>
        <a href="https://github.com/CerjioNava" aria-label="GitHub">
          <img alt="" src={githubLogo} className="icons" />
        </a>
        <a
          href="https://www.linkedin.com/in/sergio-j-nava-g/"
          aria-label="LinkedIn"
        >
          <img alt="" src={linkedinLogo} className="icons" />
        </a>
        <a href="https://www.instagram.com/cerjionava/" aria-label="Instagram">
          <img alt="" src={instagramLogo} className="icons" />
        </a>
      </div>
    </div>
  </footer>
);

export default Contact;
