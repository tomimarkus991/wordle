import { useWindowWidth } from "@react-hook/window-size";
import clsx from "clsx";

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
  const width = useWindowWidth();

  const isMobile = width >= 500 ? false : true;

  const createButton = (key: string) => {
    // @ts-ignore
    let color = usedKeys[key];
    if (key === "enter") {
      color = "green";
    } else if (key === "delete") {
      color = "red";
    }

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
        size={width >= 700 ? "xs" : "xxs"}
        className="uppercase"
        variant={color}
        key={key}
      >
        {key}
      </RealButton>
    );
  };

  const rowClass = "flex w-[100%] flex-row items-center justify-center space-x-1";
  console.log(isMobile);

  return (
    <div className="mt-10 flex w-[100%] flex-col items-center justify-center space-y-2 overflow-visible">
      {!isMobile && (
        <>
          <div className={clsx(rowClass)}>
            {keys.normal1.map(letter => {
              return createButton(letter.key);
            })}
          </div>
          <div className={clsx(rowClass)}>
            {keys.normal2.map(letter => {
              return createButton(letter.key);
            })}
          </div>
          <div className={clsx(rowClass)}>
            {keys.normal3WithButtons.map(letter => {
              return createButton(letter.key);
            })}
          </div>
        </>
      )}
      {isMobile && (
        <>
          <div className={clsx(rowClass)}>
            {keys.mobile1.map(letter => {
              return createButton(letter.key);
            })}
          </div>
          <div className={clsx(rowClass)}>
            {keys.normal2.map(letter => {
              return createButton(letter.key);
            })}
          </div>
          <div className={clsx(rowClass)}>
            {keys.mobile3.map(letter => {
              return createButton(letter.key);
            })}
          </div>
          <div className={clsx(rowClass)}>
            {keys.buttons.map(letter => {
              return createButton(letter.key);
            })}
          </div>
        </>
      )}
    </div>
  );
};
