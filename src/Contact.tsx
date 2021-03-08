import React from "react";
import logo from "./icon.png";
import "./App.css";

function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Contact info goes here.</p>
      </header>
    </div>
  );
}

export default Contact;
