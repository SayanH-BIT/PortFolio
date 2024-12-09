import React from 'react';
import { Link } from 'react-router-dom';
// import './Home.css';

const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
        <h1>Namaste, I'm Sayan Haldar</h1>
        <p>Welcome to my portfolio website!</p>
        <button className="btn">
          <Link to='/about'>Learn More</Link>
        </button>
      </div>
    </section>
  );
};

export default Home;
