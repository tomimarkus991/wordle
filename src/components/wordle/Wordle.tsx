import { useEffect } from "react";
import { toast } from "react-hot-toast";

import { ConfettiEffect, Grid, Keypad } from "components";
import { useApp } from "context";
import { useWordle } from "hooks";
import { ISolution } from "types";

interface Props {
  solution: ISolution;
}

export const Wordle = ({ solution }: Props) => {
  const { handleKeyup, currentGuess, isCorrect, turn, guesses, usedKeys } = useWordle(solution);
  const { numberOfGuesses } = useApp();

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);

    if (isCorrect) {
      toast.success("Congratulations! You solved the puzzle!", { duration: 5000 });
      window.removeEventListener("keyup", handleKeyup);
    }

    if (turn >= numberOfGuesses) {
      toast.error("You ran out of guesses! Better luck next time!", { duration: 5000 });
      window.removeEventListener("keyup", handleKeyup);
    }

    return () => window.removeEventListener("keyup", handleKeyup);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleKeyup, isCorrect, turn]);
  console.log(solution);

  return (
    <div className="mt-10 select-none md:mt-20">
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn}></Grid>
      <Keypad usedKeys={usedKeys} handleKeyup={handleKeyup} />
      {isCorrect && <ConfettiEffect />}
    </div>
  );
};
