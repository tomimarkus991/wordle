import { useState } from "react";

import { ISolution } from "types";

export const useWordle = (solution: ISolution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState<string[]>([]);
  const [history, setHistory] = useState<string[]>([]);
  const [isCorrect, setIsCorrect] = useState(false);

  // format a guess into an array of letter objects
  // e.g. [{key: 'a', color: 'yellow'}]
  const formatGuess = () => {};

  // add a new guess to the guesses state
  // update the isCorrect state if the guess is correct
  // add one to the turn state
  const addNewGuess = () => {};

  // handle keyup event & track current guess
  // if user presses enter, add the new guess
  const handleKeyup = ({ key }: { key: string }) => {
    if (key === "Backspace") {
      setCurrentGuess(currentGuess.slice(0, -1));
    }

    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess(prevState => prevState + key);
      }
    }

    console.log("s 1234", solution);
  };

  console.log(setTurn, setGuesses, setHistory, setIsCorrect, history, addNewGuess, formatGuess);

  return { turn, currentGuess, guesses, isCorrect, handleKeyup };
};
