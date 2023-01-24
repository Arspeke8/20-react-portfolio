import React, { useState, useEffect } from 'react';
import "./About.css"
import NavBar from './NavBar';
import Footer from './Footer';

const About = () => {
    

  return (
    <div>
    <NavBar></NavBar>
    <main>
   <h2>About Me</h2>
   <p>Hi, my name is Ryan, and I'm a beginner coder. Throughout my life I have enjoyed building and using/playing computer programs. During the past few years are started to become fascinated with computer Bots, specifically the Bots that automate buying retail items on online retail platforms. I am hoping this class will help me gain the knowledge or the basis to start learning about creating a website and or computer programs.</p>
    </main>
    <Footer></Footer>
    </div>
  );
};

export default About;