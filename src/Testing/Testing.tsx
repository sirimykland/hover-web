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
        <li>
          Download the agreements form{' '}
          <a
            href="../Downloads/Informasjonsskriv.pdf"
            download
            className="app-link"
            target="_blank">
            here
          </a>
          .
        </li>
        <li>
          Please read the document carefully, sign it, and send the signed version to our e-mail{' '}
          <a href="mailto:contact.hoverapp@gmail.com" className="app-link">
            contact.hoverapp@gmail.com
          </a>
          .
        </li>
        <li>
          Watch the Hover introduction video on{' '}
          <a
            href="https://youtube.com"
            className="app-link"
            target="_blank"
            rel="noopener noreferrer">
            YouTube
          </a>{' '}
          to get a quick presentation of how the game works.
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
        <li>Use the application during the two weeks of the test period (12.04-25.04).</li>
        <li>
          After the test period, answer this{' '}
          <a className="app-link" target="_blank" rel="noopener noreferrer">
            questionnaire
          </a>
          .
        </li>
      </ol>
      <h4 className="sub-header">Questions?</h4>
      <p className="text">
        Please contact us at{' '}
        <a href="mailto:contact.hoverapp@gmail.com" className="app-link">
          contact.hoverapp@gmail.com
        </a>
        .
      </p>
    </div>
  );
}

export default Test;
