import React, { useState, useEffect } from "react";
import Pic from "./Pic";
const images = require.context("../images", true);
const imageList = images.keys().map((image) => images(image));

const ImageContainer = () => {
  return (
    <div id="imageContainer">
      <div className="column">
        <Pic url={imageList[0]} />
        <Pic />
        <Pic />
      </div>
      <div className="column">
        <Pic />
        <Pic />
        <Pic />
      </div>{" "}
      <div className="column">
        <Pic />
        <Pic />
        <Pic />
      </div>
    </div>
  );
};

export default ImageContainer;
