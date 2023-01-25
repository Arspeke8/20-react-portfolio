import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={80} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
