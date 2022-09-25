import { useState } from "react";

import { useApp } from "context";
import { useFetchIsWordInDB } from "hooks";
import { ISolution } from "types";

type FormatedGuessType = {
  key: string;
  color: "grey" | "green" | "yellow";
};

export const useWordle = (solution: ISolution) => {
  const { solutionLength, numberOfGuesses } = useApp();
  const { fetchData } = useFetchIsWordInDB();

  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState<FormatedGuessType[][]>([...Array(numberOfGuesses)]);
  const [history, setHistory] = useState<string[]>([]);
  const [isCorrect, setIsCorrect] = useState(false);

  // format a guess into an array of letter objects
  // e.g. [{key: 'a', color: 'yellow'}]
  const formatGuess = () => {
    const solutionArray: any[] = [...solution.word];
    const formatedGuess: FormatedGuessType[] = [...currentGuess].map(letter => {
      return { key: letter, color: "grey" };
    });

    // find any green letters
    formatedGuess.forEach((letter, i) => {
      if (solutionArray[i] === letter.key) {
        formatedGuess[i].color = "green";
        solutionArray[i] = null;
      }
    });

    // find any yellow letters
    formatedGuess.forEach((letter, i) => {
      if (solutionArray.includes(letter.key) && letter.color !== "green") {
        formatedGuess[i].color = "yellow";
        solutionArray[solutionArray.indexOf(letter.key)] = null;
      }
    });

    return formatedGuess;
  };

  // add a new guess to the guesses state
  // update the isCorrect state if the guess is correct
  // add one to the turn state
  const addNewGuess = (formatedGuess: FormatedGuessType[]) => {
    if (currentGuess === solution.word) {
      setIsCorrect(true);
    }

    setGuesses(prevGuesses => {
      const newGuesses = [...prevGuesses];

      newGuesses[turn] = formatedGuess;
      return newGuesses;
    });

    setHistory(prevHistory => [...prevHistory, currentGuess]);

    setTurn(prev => prev + 1);

    setCurrentGuess("");
  };

  // handle keyup event & track current guess
  // if user presses enter, add the new guess
  const handleKeyup = async ({ key }: { key: string }) => {
    if (key === "Enter") {
      // if turn is > than 5, return
      if (turn > 5) {
        console.log("game over!");
        return;
      }
      // do not allow duplicate words
      if (history.includes(currentGuess)) {
        console.log("You already tried that word");
        return;
      }
      // word must be solutionLength long
      // when word is not equal to solutionLength, do not add guess
      if (currentGuess.length !== solutionLength) {
        console.log(`Word must be ${solutionLength} letters long`);
        return;
      }
      // word must be in database to be added
      if ((await fetchData(currentGuess)) === false) {
        console.log(`Word is not in database`);
        return;
      }

      const formatedGuess = formatGuess();

      addNewGuess(formatedGuess);
    }

    if (key === "Backspace") {
      setCurrentGuess(prev => prev.slice(0, -1));
      return;
    }

    // if key is a letter, add it to the current guess
    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < solutionLength) {
        setCurrentGuess(prev => prev + key);
      }
    }
  };

  return { turn, currentGuess, guesses, isCorrect, handleKeyup, history };
};
