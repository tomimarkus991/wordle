import clsx from "clsx";

import { useApp } from "context";
import { FormatedGuessType } from "types";

interface Props {
  guess: FormatedGuessType[];
  currentGuess?: string;
}

export const Row = ({ guess, currentGuess }: Props) => {
  const { solutionLength } = useApp();

  const rows = [...Array(solutionLength)];
  const currentGuessArray = [...(currentGuess || "")];

  // calculates how many boxes are empty
  const emptyBoxes = [...Array(solutionLength - currentGuessArray.length)];

  if (currentGuess) {
    return (
      <div className="flex justify-center">
        {currentGuessArray.map((letter, i) => (
          <div
            key={i}
            className={clsx(
              "m-[0.2rem] h-14 w-14 rounded-lg border border-solid border-gray-500 text-center text-[2.5rem] font-bold uppercase",
              "flex items-center justify-center",
              "text-gray-700"
            )}
          >
            {letter}
          </div>
        ))}
        {emptyBoxes.map((_, i) => (
          <div
            key={i}
            className={clsx(
              "m-[0.2rem] h-14 w-14 rounded-lg border border-solid border-gray-500 text-center text-[2.5rem] font-bold uppercase",
              "flex items-center justify-center"
            )}
          />
        ))}
      </div>
    );
  }

  if (guess) {
    return (
      <div className="flex justify-center">
        {guess.map((letter, i) => (
          <div
            key={i}
            className={clsx(
              letter.color === "green" && "border-green-600 bg-green-600",
              letter.color === "yellow" && "border-yellow-500 bg-yellow-500",
              letter.color === "gray" && "border-gray-500 bg-gray-500",
              "m-[0.2rem] h-14 w-14 rounded-lg border border-solid border-gray-500 text-center text-[2.5rem] font-bold uppercase",
              "flex items-center justify-center",
              "text-white"
            )}
          >
            {letter.key}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex justify-center">
      {rows.map((_, i) => (
        <div
          key={i}
          className={clsx(
            "m-[0.2rem] h-14 w-14 rounded-lg border border-solid border-gray-500 text-center text-[2.5rem] font-bold uppercase",
            "flex items-center justify-center"
          )}
        />
      ))}
    </div>
  );
};
