import { useEffect } from "react";

import { useWordle } from "hooks";
import { ISolution } from "types";

interface Props {
  solution: ISolution;
}

export const Wordle = ({ solution }: Props) => {
  const { handleKeyup, currentGuess } = useWordle(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);

    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup]);

  return (
    <div>
      <div>Solution: {solution.word}</div>
      <div>Current guess: {currentGuess}</div>
    </div>
  );
};
