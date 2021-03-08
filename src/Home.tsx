import React from "react";
import logo from "./icon.png";
import "./App.css";

function Home() {
  return (
    <div>
      <h1>Hover</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Hover logo" />
        <p>
          Hover is a pervasive game where your location is used as the input. In
          short, players get points for being at certain locations in the real
          world. The spots are based on places that could improve your
          well-being, such as training centers, schools, libraries, museums, and
          art galleries. They are classified into four different categories
          corresponding to their purpose; health, knowledge, cultural and
          social. For example, training centers will be categorized as health,
          school as knowledge, museums and concert venues as culture, and
          bowling alleys and restaurants as social.
        </p>
        <p>
          Achievements and points are awarded based on individual categories and
          total score. In this way, you can focus on doing your best in a
          specific category or try to get the best overall score. Players can
          also challenge each other in pre-defined challenges where they decide
          the rules themselves.
        </p>
        <p></p>
        <a
          className="App-link"
          href="https://github.com/maattss/hover"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub repository
        </a>
      </header>
    </div>
  );
}

export default Home;
