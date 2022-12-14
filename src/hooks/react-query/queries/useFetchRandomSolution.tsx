import { useQuery } from "@tanstack/react-query";

import { useApp } from "context";
import { ISolution } from "types";
import { supabase } from "utils";

export const useFetchRandomSolution = () => {
  //   const { showErrorToast } = useToast();
  const { table } = useApp();

  const fetchData = async () => {
    // get count
    const { count }: any = await supabase.from(table).select("*", { count: "exact" });

    // get random row
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const random = Math.floor(Math.random() * count!);

    // fetch solution
    const { data }: any = await supabase.from(table).select("*").eq("id", random).single();
    // if (error) {
    //   showErrorToast({
    //     title: "Fetch Group Data Error",
    //     description: error.message,
    //   });
    //   throw new Error(error.message);
    // }

    const _data: ISolution = data;

    return _data;
  };

  return useQuery(["solution"], () => fetchData());
};
