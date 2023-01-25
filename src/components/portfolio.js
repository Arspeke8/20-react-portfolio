import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import './portfolio.css';

function Portfolio() {
  return (
    <div>
      <NavBar></NavBar>
      <h1>Portfolio</h1>
      <p>
        Here are some examples of my work:
      </p>
      <ul>
        <li>
          <a href="https://proj2-restaurant-mgmt-sys.herokuapp.com/" target="_blank">Burger's and Fries - Project Two </a>
        </li>
        <li>
          <a href="https://arspeke8.github.io/SaltySnails/" target="_blank">Salty Snails - Project One</a>
        </li>
        <li>
          <a href="https://arspeke8.github.io/HTML-GIT-CSS-Challenge/" target="_blank">Refactor Code</a>
        </li>
        <li>
          <a href="https://arspeke8.github.io/Challenge-3-password-generator/" target="_blank">JavaScript Password Generator</a>
        </li>
        <li>
          <a href="https://arspeke8.github.io/Challenge-6-Weather-Dashboard/" target="_blank">Weather App</a>
        </li>
        <li>
          <a href="https://arspeke8.github.io/challenge-5-work-day-scheduler/" target="_blank">Work Day Scheduler</a>
        </li>
      </ul>
      <Footer></Footer>
    </div>
  );
}

export default Portfolio;
