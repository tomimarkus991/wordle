import { useWindowWidth, useWindowHeight } from "@react-hook/window-size";
import { useState } from "react";
import Confetti from "react-confetti";

export const ConfettiEffect = () => {
  const width = useWindowWidth();
  const height = useWindowHeight();

  const [recyclevalue, setRecyclevalue] = useState(true);

  setTimeout(() => {
    setRecyclevalue(false);
  }, 3000);

  return <Confetti width={width} height={height} numberOfPieces={2000} recycle={recyclevalue} />;
};
