import React from 'react';
import './About.css';
import me from '../../assets/me.jpg';

export default function About() {
  return (
    <div className="about">
      <div className="intro-container about-intro-container">
        <img src={me} className="pic" alt="" />
        <div>
          <p className="heading">Hey I'm Sam</p>
          <br />
          <p>
            I'm currently studying{' '}
            <i>
              Computer Science and Psychology
            </i>{' '}
            at University of Ottawa
          </p>
          <br />

          <br />

          <div className="info-section">
            <div className="text">
              <br />
              <p>
                <b>Things I'm exploring right now: </b>
                mobile development, physical prototyping, cooking,
                entrepeneuership, film photography
              </p>
              <br />
              <p>
                <b>Things I want to learn more about:</b> music theory, skateboarding, machining, designing
              </p>

              <div className="contact">
                <a href="mailto:sam.pich@outlook.com">Email</a>
                <a href="https://github.com/sam-pich">GitHub</a>
                <a href="https://www.linkedin.com/in/sampich/">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
