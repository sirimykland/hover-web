import React from "react";
import logo from "./icon.png";
import "./App.css";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Project description goes here.</p>
        <a
          className="App-link"
          href="https://github.com/maattss/hover"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>

        <a
          className="App-link"
          href="https://apps.apple.com/us/app/testflight/id899247664"
          target="_blank"
          rel="noopener noreferrer"
        >
          TestFlight for IOS
        </a>
      </header>
    </div>
  );
}

export default Home;
