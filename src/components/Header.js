import React, { useState, useEffect } from "react";

const Header = () => {
  return (
    <div className="header">
      <div>
        <h1 id="title">Memory Game</h1>
        <p id="instructions">
          Get points by clicking on an imge but don't click on any more than
          once!
        </p>
      </div>
      <div>
        <div id="currScore">Score: </div>
        <div id="highScore">High Schore: </div>
      </div>
    </div>
  );
};

export default Header;
