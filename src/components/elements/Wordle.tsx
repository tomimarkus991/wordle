import { useEffect } from "react";

import { Grid, Keypad } from "components";
import { useWordle } from "hooks";
import { ISolution } from "types";

interface Props {
  solution: ISolution;
}

export const Wordle = ({ solution }: Props) => {
  const { handleKeyup, currentGuess, isCorrect, turn, guesses } = useWordle(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);

    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup]);

  console.log("history", history);
  console.log("isCorrect", isCorrect);

  return (
    <div>
      <div>Turn: {turn + 1}</div>
      <div>Solution: {solution.word}</div>
      <div>Current guess: {currentGuess}</div>
      <div>Is Correct?: {isCorrect ? "correct" : "not correct"}</div>
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn}></Grid>
      <Keypad />
    </div>
  );
};
