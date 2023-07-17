import React, { useState, useEffect } from "react";
import pokeball from "../assets/images/pokeball.png";
import logo from "../assets/images/header-logo.png";

const Header = () => {
  return (
    <div className="header">
      <div>
        <h1 id="title">
          Pokemon Memory Game <img id="pokeball" src={pokeball} />
        </h1>
        <p id="instructions">
          Get points by clicking on an imge but don't click on any more than
          once!
        </p>
      </div>
    </div>
  );
};

export default Header;
