import React from "react";
import logo from "./icon.png";
import "./App.css";

function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <header className="App-header">
        <p>Any questions? Please contact us at</p>
        <a href="mailto:contact.hoverapp@gmail.com" className="App-link">
          contact.hoverapp@gmail.com
        </a>
      </header>
    </div>
  );
}

export default Contact;
