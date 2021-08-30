import React, { useState } from "react";
import Email from "./Email";
import Clock from "./Clock";
import TechStack from "./TechStack";
import Resume from "./Resume";

const App = (props) => {
  return (
    <div>
      <div className="intro">
        <h1>Gareth Rogers</h1>
        <h2>Full-Stack Software Engineer, Tallahassee, FL</h2>
        <Clock />
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
        Army Commendation Medal Receipient, Hack Reactor / Galvanize Graduate
      </div>
      <div>
        <Email />
      </div>
    </div>
  );
};

export default App;
