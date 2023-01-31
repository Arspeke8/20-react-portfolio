// import '../Home.css';
import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css" 

function NavBar() {
  return (
    <>
    <h1 id="sitename">Ryan's Portfolio</h1>
    <nav className="menu">
    <Link to="/20-react-portfolio/">Home</Link>
<Link to="/20-react-portfolio/about">About Me</Link>
<Link to="/20-react-portfolio/portfolio">Portfolio</Link>
<Link to="/20-react-portfolio/contact">Contact</Link>
<Link to="/20-react-portfolio/resume">Resume</Link>
      {/* <Link to="/contact">Contact</Link>
      <Link to="/resume">Resume</Link> */}
    </nav>
    <aside className="clearfix"></aside>
    </>
  );
}

export default NavBar;
