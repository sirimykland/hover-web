import React from 'react';
import logo from './icon.png';
import './App.css';

function Home() {
  return (
    <div className="container">
      <div className="home">
        <h1>Hover</h1>
        <img src={logo} className="App-logo" alt="Hover logo" />
        <p>
          Hover is a pervasive game where your location is used as the input. In short, players get
          points for being at certain locations in the real world. The spots are based on places
          that could improve your well-being, such as training centers, schools, libraries, museums,
          and art galleries. They are classified into four different categories corresponding to
          their purpose; health, knowledge, cultural and social. For example, training centers will
          be categorized as health, school as knowledge, museums and concert venues as culture, and
          bowling alleys and restaurants as social.
        </p>
        <p>
          Achievements and points are awarded based on individual categories and total score. In
          this way, you can focus on doing your best in a specific category or try to get the best
          overall score. Players can also challenge each other in pre-defined challenges where they
          decide the rules themselves.
        </p>
        <div className="Link-container">
          <a href="https://apps.apple.com/no/app/hover/id1556425356?itsct=apps_box&amp;itscg=30200">
            <img
              src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-US?size=250x83&amp;releaseDate=1615161600&h=f31678349d6bb37f7f2d3b88b34561e4"
              alt="Download on the App Store"
              className="App-store-img"
            />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.hoverapp.hover&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
            <img
              alt="Get it on Google Play"
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              className="Google-Play-img"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
