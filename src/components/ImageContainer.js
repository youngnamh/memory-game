import React, { useState, useEffect } from "react";
import Pic from "./Pic";
import { shuffle } from "lodash";

const images = require.context("../assets/images/pokemon", true);
const imageList = images.keys().map((image) => images(image));

const ImageContainer = () => {
  const [allPokemon, setAllPokemon] = useState(imageList);
  const [allSelected, setAllSelected] = useState([]);
  const [topScore, setTopScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);

  useEffect(() => {
    if (currentScore >= topScore) {
      setTopScore(currentScore);
    }
  }, [currentScore, topScore]);

  const makeSelection = (selection) => {
    //if the selection has already been made then you lose the game
    if (allSelected.includes(selection)) {
      console.log("You lose");
      //restart game
      setAllSelected([]);
      setCurrentScore(0);
    } else {
      setCurrentScore(currentScore + 1);
      setAllSelected((prevState) => [...prevState, selection]);
      let valid = false;
      while (!valid) {
        if (allSelected.length < 8) {
          setAllPokemon((prevState) => shuffle(prevState));
          valid = true;
        } else {
          const shuffleState = shuffle(allPokemon);
          setAllPokemon((prevState) => shuffleState);
          const firstNine = shuffleState.slice(0, 9);
          valid = () => {
            for (let i = 0; i < firstNine.length; i++) {
              if (!allSelected.includes(firstNine[i])) {
                return true;
              }
            }
            return false;
          };
        }
      }
    }
  };

  return (
    <div>
      <div id="imageContainer">
        <div className="column">
          <Pic
            url={allPokemon[0]}
            onClick={() => makeSelection(allPokemon[0])}
          />
          <Pic
            url={allPokemon[1]}
            onClick={() => makeSelection(allPokemon[1])}
          />
          <Pic
            url={allPokemon[2]}
            onClick={() => makeSelection(allPokemon[2])}
          />
        </div>
        <div className="column">
          <Pic
            url={allPokemon[3]}
            onClick={() => makeSelection(allPokemon[3])}
          />
          <Pic
            url={allPokemon[4]}
            onClick={() => makeSelection(allPokemon[4])}
          />
          <Pic
            url={allPokemon[5]}
            onClick={() => makeSelection(allPokemon[5])}
          />
        </div>{" "}
        <div className="column">
          <Pic
            url={allPokemon[6]}
            onClick={() => makeSelection(allPokemon[6])}
          />
          <Pic
            url={allPokemon[7]}
            onClick={() => makeSelection(allPokemon[7])}
          />
          <Pic
            url={allPokemon[8]}
            onClick={() => makeSelection(allPokemon[8])}
          />
        </div>
      </div>
      <div id="scoreBoard">
        <div id="currScore">Score: {currentScore}</div>
        <div id="topScore">High Score: {topScore}</div>
      </div>
    </div>
  );
};

export default ImageContainer;
