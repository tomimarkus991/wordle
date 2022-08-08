import { DefaultWrapper, Wordle } from "components";
import { useFetchRandomSolution5 } from "hooks";

export const HomePage = () => {
  const { data: solution } = useFetchRandomSolution5();

  return (
    <DefaultWrapper>
      <div>{solution && <Wordle solution={solution} />}</div>
    </DefaultWrapper>
  );
};
