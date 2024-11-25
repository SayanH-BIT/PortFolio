import React from 'react';
// import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <h2>About Me</h2>
        <p>I'm a passionate web developer with experience in React.js, JavaScript, and more...</p>
        <div className="skills">
          <h3>Skills:</h3>
          <ul>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>HTML & CSS</li>
            <li>Node.js</li>
            <li>Express</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
