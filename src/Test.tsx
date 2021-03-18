import React from 'react';
import './App.css';

function Test() {
  return (
    <div className="container">
      <h1>Testing</h1>
      <h2 className="Sub-header">
        Important information about the test period will be added to this page.
      </h2>
      <p>
        The project&apos;s testing phase is set to be between monday 12th of April till sunday 25th
        of April.
      </p>
      <p>
        After the testing is finished we kindly ask the participants to answere a simple
        questionaire about their experience.
      </p>
      <p>
        <a
          className="App-link"
          href="https://github.com/maattss/hover"
          target="_blank"
          rel="noopener noreferrer">
          GitHub repository
        </a>
      </p>
      <p>
        <a
          className="App-link"
          href="https://apps.apple.com/us/app/testflight/id899247664"
          target="_blank"
          rel="noopener noreferrer">
          TestFlight for iOS
        </a>
      </p>
    </div>
  );
}

export default Test;
