import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import './resume.css';

function Resume() {
  return (
    <div>
      <NavBar></NavBar>
      <h1>Resume</h1>
      <h2>Front-End</h2>
      <ul>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>Bootstrap</li>
        <li>React</li>
        <li>Responsive design</li>
      </ul>
      <h2>Back-End</h2>
      <ul>
        <li>APIs</li>
        <li>NodeJS</li>
        <li>Express</li>
        <li>Model View Controller (MVC)</li>
        <li>REST</li>
        <li>Progressive Web Applications (PWA)</li>
      </ul>
      <h2>Dev Tools</h2>
      <ul>
        <li>Git</li>
        <li>npm</li>
        <li>Jest</li>
        <li>Webpack</li>
      </ul>
      <h2>Databases</h2>
      <ul>
        <li>MySQL</li>
        <li>Sequelize</li>
        <li>NoSQL</li>
        <li>GraphQL</li>
        <li>MongoDB</li>
        <li>Mongoose</li>
      </ul>
      <Footer></Footer>
    </div>
  );
}

export default Resume;
