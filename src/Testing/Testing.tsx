import React from 'react';
import '../App.css';
import './Testing.css';

function Test() {
  return (
    <div className="my-4">
      <h1 className="header">Testing</h1>
      <p className="text">
        <i>Period: 12th - 25th of April 2021</i>
      </p>
      <h4 className="sub-header">What to do</h4>

      <ol>
        <li>Read and sign the agreements form, download it here.</li>
        <li>
          Watch the Hover introduction video at{' '}
          <a
            href="https://youtube.com"
            className="app-link"
            target="_blank"
            rel="noopener noreferrer">
            YouTube
          </a>
          .
        </li>
        <li>
          Download Hover from{' '}
          <a
            href="https://apps.apple.com/no/app/hover/id1556425356"
            className="app-link"
            target="_blank"
            rel="noopener noreferrer">
            App Store
          </a>{' '}
          or{' '}
          <a
            href="https://play.google.com/store/apps/details?id=com.hoverapp.hover"
            className="app-link"
            target="_blank"
            rel="noopener noreferrer">
            Google Play
          </a>
          .
        </li>
        <li>Use the application during the two weeks of the test period.</li>
        <li>After the test period, answer this questionnaire.</li>
      </ol>
    </div>
  );
}

export default Test;
