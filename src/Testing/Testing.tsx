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
          Read the information document and agree to participate in the study{' '}
          <a
            href="https://nettskjema.no/a/194091"
            className="app-link"
            target="_blank"
            rel="noopener noreferrer">
            here
          </a>{' '}
          (login using Feide).
        </li>
        <li>
          Watch the Hover introduction video on{' '}
          <a
            href="https://www.youtube.com/watch?v=s5bqVqBzYPI"
            className="app-link"
            target="_blank"
            rel="noopener noreferrer">
            YouTube
          </a>{' '}
          to get a quick presentation of how the game works.
        </li>
        <li>
          Download and install Hover from{' '}
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
          After the test period is finished, answer this{' '}
          <a
            href="https://nettskjema.no/a/183299 "
            className="app-link"
            target="_blank"
            rel="noopener noreferrer">
            questionnaire
          </a>{' '}
          (login using Feide). The survey is open from <i>25th April 12:00</i> and it should not
          take more than 10-15 minutes to complete.
        </li>
      </ol>
      <h4 className="sub-header">Appreciation</h4>
      <p className="text">
        We appreciate everyone participating in the survey. Therefore, we will pick{' '}
        <strong>5</strong> random participants who get a surprise gift from us when the test period
        is completed. To qualify, you need to actively take part in the testing, i.e. use the
        application between 12.04-25.04, and answer the questionnaire afterward.
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
