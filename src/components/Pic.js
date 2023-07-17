import React, { useState, useEffect } from "react";

const Pic = ({ url, onClick }) => {
  const print = (url) => console.log("hello :" + url);

  return (
    <div
      className="frame"
      style={{
        border: "0.5rem solid white",
        width: "20vh",
        height: "20vh",
      }}
      onClick={onClick}
    >
      <img src={url} alt="character" className="characterImage" />
    </div>
  );
};

export default Pic;
