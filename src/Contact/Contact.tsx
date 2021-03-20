import React from 'react';
import '../App.css';
import './Contact.css';

function Contact() {
  return (
    <div className="my-4">
      <h1 className="header">Contact</h1>
      <p className="sub-header">
        Any questions? Please contact us at:{' '}
        <a href="mailto:contact.hoverapp@gmail.com" className="app-link">
          contact.hoverapp@gmail.com
        </a>
      </p>
    </div>
  );
}

export default Contact;
