import { DefaultWrapper, Wordle } from "components";
import { useFetchRandomSolution } from "hooks";

export const HomePage = () => {
  const { data: solution } = useFetchRandomSolution();

  return (
    <DefaultWrapper>
      <div>{solution && <Wordle solution={solution} />}</div>
    </DefaultWrapper>
  );
};
