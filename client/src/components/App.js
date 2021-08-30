import React, { useState } from "react";
import Email from "./Email";
import Clock from "./Clock";
import TechStack from "./TechStack";
import Resume from "./Resume";
import { SiLinkedin, SiGmail, SiGithub } from "react-icons/si";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = (props) => {
  return (
    <div className="page">
      <ToastContainer position="bottom-center" limit={1} />
      <div className="intro">
        <h1>Gareth Rogers</h1>
        <h2>Full-Stack Software Engineer, Tallahassee, FL</h2>
        <Clock />
      </div>
      <div className="contact">
        <h2>
          <u>Contact</u>
        </h2>
        <div className="contact-links">
          <a className="icon-link" href="https://linkedin.com/in/garethdrogers">
            <SiLinkedin className="icon" size="70px" />
          </a>
          <a className="icon-link" href="https://github.com/garethdavisrogers">
            <SiGithub className="icon" size="70px" />
          </a>
          <div>
            <a href="#email-container">
              <SiGmail className="icon" size="70px" />
            </a>
          </div>
        </div>
      </div>
      <div className="tech-stack">
        <h2>
          <u>Programming Languages / Technologies Used</u>
        </h2>
        <TechStack />
      </div>
      <div className="bio">
        <h2>
          <u>Bio</u>
        </h2>
        I am a full-stack software engineer who specializes in React apps,
        Node/Express servers, and PostgreSQL databases (PERN stack) though I am
        proficient in a wide range of programming languages and modules.
      </div>
      <div className="interests">
        <h2>
          <u>Personal Interests</u>
        </h2>
        Music composition, Exercise, Anime, and Muay Thai. Fun fact: From 2017
        to 2019 I was attempting to play music professionally before becoming
        more serious about programming professionally. Here's a link to some of
        my music if you're interested...
        <a href="https://soundcloud.com/grogers6">Let's see it.</a>
      </div>
      <div className="resume">
        <h2>
          <u>Résumé</u>
        </h2>
        <Resume />
      </div>

      <div className="accomplishments">
        <h2>
          <u>Accomplishments</u>
        </h2>
        <ul className="accomplishment-list">
          <li>Army Commendation Medal Receipient</li>
          <li>Hack Reactor / Galvanize Graduate</li>
          <li>2 Studio Albums</li>
        </ul>
      </div>
      <div id="email-container">
        <Email />
      </div>
    </div>
  );
};

export default App;
