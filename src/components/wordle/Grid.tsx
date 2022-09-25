import { Row } from "components";
import { FormatedGuessType } from "types";

interface Props {
  currentGuess: string;
  guesses: FormatedGuessType[][];
  turn: number;
}

export const Grid = ({ currentGuess, guesses, turn }: Props) => {
  return (
    <div>
      {guesses.map((guess, i) => {
        if (turn === i) {
          return <Row key={i} guess={guess} currentGuess={currentGuess} />;
        }
        return <Row key={i} guess={guess} />;
      })}
    </div>
  );
};
