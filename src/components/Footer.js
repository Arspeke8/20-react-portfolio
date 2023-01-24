import React from 'react';
import { FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={32} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
