import React from 'react';
// import './Home.css';

const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
        <h1>Hello, I'm [Your Name]</h1>
        <p>Welcome to my portfolio website!</p>
        <button className="btn">
          <a href="#about">Learn More</a>
        </button>
      </div>
    </section>
  );
};

export default Home;
