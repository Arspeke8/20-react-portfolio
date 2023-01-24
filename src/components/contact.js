import React from 'react';
import ContactForm from './ContactForm';
import NavBar from './NavBar';
import Footer from './Footer';

function Contact() {
  return (
    <div>
        <NavBar></NavBar>
      <h1>Contact Me</h1>
        <ContactForm />
        <Footer></Footer>
    </div>
  );
}

export default Contact
