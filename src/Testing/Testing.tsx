import React from 'react';
import '../App.css';
import './Testing.css';

function Testing() {
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
            href="/informasjon.pdf"
            download="informasjonHover.pdf"
            className="app-link"
            target="_blank"
            rel="noopener noreferrer">
            here
          </a>
          .
        </li>
        <li>
          Please read the document carefully, sign it, and send us the signed version:{' '}
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
          After the test period, answer the{' '}
          <a className="app-link" target="_blank" rel="noopener noreferrer">
            questionnaire
          </a>
          . It should not take more than 15-20 minutes.
        </li>
      </ol>
      <h4 className="sub-header">Appreciation</h4>
      <p className="text">
        We really appreciate everyone participating in the survey. Therefore, we will randomly pick
        5 people who get a surprise gift from us when the testing is finished. To qualify, you need
        to actively use the application during the test period and answer the questionnaire
        afterward.
      </p>
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

export default Testing;
