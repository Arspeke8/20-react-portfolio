// import '../Home.css';
import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css" 

function NavBar() {
  return (
    <>
    <h1 id="sitename">Ryan's Portfolio</h1>
    <nav className="menu">
      <Link to="/">Home</Link>
      <Link to="/about">About Me</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/resume">Resume</Link>
      {/* <Link to="/contact">Contact</Link>
      <Link to="/resume">Resume</Link> */}
    </nav>
    <aside className="clearfix"></aside>
    </>
  );
}

export default NavBar;
