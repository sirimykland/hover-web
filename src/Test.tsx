import React from "react";
import "./App.css";

function Test() {
  return (
    <div>
      <h1>Test</h1>
      <header className="App-body">
        <h2>
          Important information before the test period will be added to this
          page.
        </h2>
        <h3>Useful links</h3>
        <a
          className="App-link"
          href="https://apps.apple.com/us/app/testflight/id899247664"
          target="_blank"
          rel="noopener noreferrer"
        >
          TestFlight for iOS
        </a>
      </header>
    </div>
  );
}

export default Test;
