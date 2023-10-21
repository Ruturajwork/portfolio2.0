import React from "react";
import "./splash.css"; // Import your CSS file

const SplashName = () => {
  return (
    <div className="svg-container">
      <svg viewBox="0 0 960 300">
        <symbol id="s-text">
          <text textAnchor="middle" x="50%" y="80%">
            RUTURAJ
          </text>
          <text textAnchor="middle" x="52%" y="80%">
            RUTURAJ
          </text>
        </symbol>

        <g className="g-ants">
          <use href="#s-text" className="text-copy"></use>
          <use href="#s-text" className="text-copy"></use>
          <use href="#s-text" className="text-copy"></use>
          <use href="#s-text" className="text-copy"></use>
          <use href="#s-text" className="text-copy"></use>
        </g>
      </svg>
    </div>
  );
};

export default SplashName;
