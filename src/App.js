import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York"/>
        <footer>
          This project was coded by Roberta Barberena and is{" "}
          <a
            href="https://github.com/barberenar/weather-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            open-sourced on GitHub
          </a>{" "}
        </footer>
      </div>
    </div>
  );
}
