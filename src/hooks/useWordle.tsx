import { useState } from "react";
import { toast } from "react-hot-toast";

import { useApp } from "context";
import { useFetchIsWordInDB } from "hooks";
import { FormatedGuessType, ISolution } from "types";

export const useWordle = (solution: ISolution) => {
  const { solutionLength, numberOfGuesses } = useApp();
  const { fetchData } = useFetchIsWordInDB();

  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState<FormatedGuessType[][]>([...Array(numberOfGuesses)]);
  const [history, setHistory] = useState<string[]>([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [usedKeys, setUsedKeys] = useState<
    | {
        key: "gray" | "yellow" | "green";
      }
    | Record<string, unknown>
  >({}); // {a: 'gray', b: 'green', c: 'yellow'} etc

  // format a guess into an array of letter objects
  // e.g. [{key: 'a', color: 'yellow'}]
  const formatGuess = () => {
    const solutionArray: any[] = [...solution.word];
    const formatedGuess: FormatedGuessType[] = [...currentGuess].map(letter => {
      return { key: letter, color: "gray" };
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

    // @ts-ignore
    setUsedKeys(prev => {
      const newKeys = { ...prev };

      formatedGuess.forEach(letter => {
        // @ts-ignore
        const currentColor = newKeys[letter.key];

        if (letter.color === "green") {
          // @ts-ignore
          newKeys[letter.key] = "green";
          return;
        }
        if (letter.color === "yellow" && currentColor !== "green") {
          // @ts-ignore
          newKeys[letter.key] = "yellow";
          return;
        }
        if (letter.color === "gray" && currentColor !== "green" && currentColor !== "yellow") {
          // @ts-ignore
          newKeys[letter.key] = "gray";
          return;
        }
      });

      return newKeys;
    });

    setCurrentGuess("");
  };

  // handle keyup event & track current guess
  // if user presses enter, add the new guess
  const handleKeyup = async ({ key }: { key: string }) => {
    if (key === "Enter") {
      // if turn is > than numberOfGuesses, return
      if (turn >= numberOfGuesses) {
        return;
      }
      // do not allow duplicate words
      if (history.includes(currentGuess)) {
        toast.error("You already tried that word", { duration: 5000 });
        return;
      }
      // word must be solutionLength long
      // when word is not equal to solutionLength, do not add guess
      if (currentGuess.length !== solutionLength) {
        toast.error(`Word must be ${solutionLength} letters long`, { duration: 5000 });
        return;
      }
      // word must be in database to be added
      if ((await fetchData(currentGuess)) === false) {
        toast.error(`Word is not in database`, { duration: 5000 });
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

  return { turn, currentGuess, guesses, isCorrect, handleKeyup, history, usedKeys };
};
