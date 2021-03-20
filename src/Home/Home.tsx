import React from 'react';
import './Home.css';
import '../App.css';
import Logo from '../Images/Icon.png';
import AppStore from '../Images/AppStore.svg';
import GooglePlay from '../Images/GooglePlay.svg';

function Home() {
  return (
    <div className="home">
      <div className="text-center">
        <img src={Logo} alt="Hover logo" className="app-logo" />
        <h1 className="header">Hover</h1>
      </div>
      <p>
        Hover is a pervasive game where your location is used as the input. In short, players get
        points for being at certain locations in the real world. The spots are based on places that
        could improve your well-being, such as training centers, schools, libraries, museums, and
        art galleries. They are classified into four different categories corresponding to their
        purpose; health, knowledge, cultural and social. For example, training centers will be
        categorized as health, school as knowledge, museums and concert venues as culture, and
        bowling alleys and restaurants as social.
      </p>

      <p>
        Achievements and points are awarded based on individual categories and total score. In this
        way, you can focus on doing your best in a specific category or try to get the best overall
        score. Players can also challenge each other in pre-defined challenges where they decide the
        rules themselves.
      </p>
      <div className="link-container">
        <a href="https://apps.apple.com/no/app/hover/id1556425356" className="link-left">
          <img src={AppStore} alt="Download on the App Store" className="image" />
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.hoverapp.hover"
          className="link-right">
          <img alt="Get it on Google Play" src={GooglePlay} className="image" />
        </a>
      </div>
    </div>
  );
}

export default Home;
