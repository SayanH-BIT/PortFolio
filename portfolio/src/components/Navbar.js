import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">My Portfolio</Link>
        <div className={`nav-links ${menu ? 'active' : ''}`}>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/projects" className="nav-link">Projects</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`line ${menu ? 'line1' : ''}`}></div>
          <div className={`line ${menu ? 'line2' : ''}`}></div>
          <div className={`line ${menu ? 'line3' : ''}`}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
