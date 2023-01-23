import '../Home.css';
import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="App-header">
      <Link to="/">Home</Link>
      <Link to="/about">About Me</Link>
      {/* <Link to="/contact">Contact</Link>
      <Link to="/resume">Resume</Link> */}
    </nav>
  );
}

export default NavBar;
