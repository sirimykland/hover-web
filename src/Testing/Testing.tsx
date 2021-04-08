import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './Testing.css';

function Testing() {
  return (
    <div className="my-4">
      <h1 className="header">Testing</h1>
      <p className="text">
        <Link to="/testing/no" className="app-link">
          Norwegian
        </Link>
        {' | '}
        English
      </p>
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
            href="https://youtu.be/vx7aeTkt_aY"
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
          (login using Feide). The survey is open from <i>25th April 12:00</i> and it will not take
          more than 5-10 minutes to complete.
        </li>
      </ol>

      <h4 className="sub-header">Note</h4>
      <ol>
        <li>
          If you have already signed up for the app before the testing period, you need to sign up
          again because we have deleted all users and app content.
        </li>
        <li>
          To get the optimal game experience, we ask you to:
          <ol type="a">
            <li>To always enable Location services.</li>
            <li>To enable Notification services.</li>
            <li>
              To always run the application in the background (so that we can remind you to use the
              game through geofence-based push notifications).
            </li>
            <li>
              To turn off battery optimization or other optimization features that interfere with
              the usage of Hover (Android).
            </li>
            <li>
              Select a username or name that lets other users recognize you (name, bio, and avatars
              can be changed in settings).
            </li>
          </ol>
        </li>
        <li>
          If you experience something not working, let us know so we can fix it for you. Examples of
          this may be:
          <ol type="a">
            <li>Adjust points/duration of an activity</li>
            <li>
              Manually add an activity (i.e., you forgot to record an hour-long session at the gym.)
            </li>
            <li>Delete activities or challenges</li>
          </ol>
        </li>
      </ol>

      <h4 className="sub-header">Appreciation</h4>
      <p className="text">
        We appreciate everyone participating in the survey. Therefore, we will pick
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
