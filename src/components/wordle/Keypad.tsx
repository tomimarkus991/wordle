import { keys } from "app-constants";
import { RealButton } from "components";

export const Keypad = () => {
  return (
    <div className="mx-5 my-auto mt-10 flex flex-col items-center justify-center space-y-2">
      <div className="space-x-1">
        {keys[0].map(letter => {
          return (
            <RealButton size="xs" className="" key={letter.key}>
              {letter.key}
            </RealButton>
          );
        })}
      </div>
      <div className="space-x-1">
        {keys[1].map(letter => {
          return (
            <RealButton size="xs" className="" key={letter.key}>
              {letter.key}
            </RealButton>
          );
        })}
      </div>
      <div className="space-x-1">
        {keys[2].map(letter => {
          return (
            <RealButton size="xs" className="" key={letter.key}>
              {letter.key}
            </RealButton>
          );
        })}
      </div>
    </div>
  );
};
