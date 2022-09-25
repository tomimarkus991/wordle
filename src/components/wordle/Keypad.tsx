import { keys } from "app-constants";
import { RealButton } from "components";

interface Props {
  usedKeys:
    | {
        key: "gray" | "yellow" | "green";
      }
    | Record<string, unknown>;
  handleKeyup: ({ key }: { key: string }) => Promise<void>;
}

export const Keypad = ({ usedKeys, handleKeyup }: Props) => {
  const createButton = (key: string) => {
    // @ts-ignore
    const color = usedKeys[key];
    return (
      <RealButton
        onClick={(e: any) => {
          console.log("1234 e", e);
          console.log("1234", e.target.textContent);
          let pressedKey = e.target.textContent;

          if (e.target.textContent === "enter") {
            pressedKey = "Enter";
          } else if (e.target.textContent === "delete") {
            pressedKey = "Backspace";
          }

          handleKeyup({ key: pressedKey });
        }}
        size="xs"
        className="uppercase"
        variant={color}
        key={key}
      >
        {key}
      </RealButton>
    );
  };

  return (
    <div className="mx-5 mt-10 flex scale-50 flex-col items-center justify-center space-y-2 md:scale-100">
      <div className="space-x-1">
        {keys[0].map(letter => {
          return createButton(letter.key);
        })}
      </div>
      <div className="space-x-1">
        {keys[1].map(letter => {
          return createButton(letter.key);
        })}
      </div>
      <div className="space-x-1">
        {keys[2].map(letter => {
          return createButton(letter.key);
        })}
      </div>
    </div>
  );
};
