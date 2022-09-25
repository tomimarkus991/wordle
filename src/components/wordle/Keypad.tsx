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
    <div className="mt-10 flex w-[100%] flex-col items-center justify-center space-y-2 overflow-visible">
      <div className="flex w-[100%] flex-row items-center justify-center space-x-1">
        {keys[0].map(letter => {
          return createButton(letter.key);
        })}
      </div>
      <div className="flex w-[100%] flex-row items-center justify-center space-x-1">
        {keys[1].map(letter => {
          return createButton(letter.key);
        })}
      </div>
      <div className="flex w-[100%] flex-row items-center justify-center space-x-1">
        {keys[2].map(letter => {
          return createButton(letter.key);
        })}
      </div>
    </div>
  );
};
