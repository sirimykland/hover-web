import React from 'react';
import '../App.css';
import './Contact.css';

function Contact() {
  return (
    <div className="my-4">
      <h1 className="header">Contact</h1>
      <h2 className="sub-header">Any questions? Please contact us at</h2>
      <a href="mailto:contact.hoverapp@gmail.com" className="app-link">
        contact.hoverapp@gmail.com
      </a>
    </div>
  );
}

export default Contact;
