import "./style/App.css";
import React, { useState, useEffect } from "react";
import Pic from "./components/Pic";
import Header from "./components/Header";
import ImageContainer from "./components/ImageContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <ImageContainer />
    </div>
  );
}

export default App;
