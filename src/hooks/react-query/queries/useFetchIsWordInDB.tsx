import { useApp } from "context";
import { supabase } from "utils";

export const useFetchIsWordInDB = () => {
  //   const { showErrorToast } = useToast();
  const { table } = useApp();

  const fetchData = async (solution: string) => {
    // fetch solution
    const { data }: any = await supabase.from(table).select("*").eq("word", solution).single();
    // if (error) {
    //   showErrorToast({
    //     title: "Fetch Group Data Error",
    //     description: error.message,
    //   });
    //   throw new Error(error.message);
    // }

    if (data) {
      return true;
    } else {
      return false;
    }
  };
  return { fetchData };
};
