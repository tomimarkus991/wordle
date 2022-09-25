import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

type ProviderProps = {
  children: React.ReactNode;
};

type SolutionLengthType = 3 | 4 | 5 | 6;
type NumberOfGuessesType = 2 | 3 | 4 | 5 | 6;
type SolutionLanguageType = "eng" | "est" | "ger";

type InitialContextType = {
  solutionLength: SolutionLengthType;
  setSolutionLength: Dispatch<SetStateAction<SolutionLengthType>>;
  solutionLanguage: SolutionLanguageType;
  setSolutionLanguage: Dispatch<SetStateAction<SolutionLanguageType>>;
  table: string;
  numberOfGuesses: NumberOfGuessesType;
  setNumberOfGuesses: Dispatch<SetStateAction<NumberOfGuessesType>>;
};

const initContextData: InitialContextType = {
  solutionLength: 5, // how many columns
  setSolutionLength: () => {},
  solutionLanguage: "eng",
  setSolutionLanguage: () => {},
  table: "solutions_5_eng",
  numberOfGuesses: 6, // how may rows
  setNumberOfGuesses: () => {},
};

const AppContext = createContext(initContextData);

export const useApp = () => useContext(AppContext);

export const AppProvider = ({ children }: ProviderProps) => {
  const tableName = "solutions";
  const [solutionLength, setSolutionLength] = useState<SolutionLengthType>(5);
  const [solutionLanguage, setSolutionLanguage] = useState<SolutionLanguageType>("eng");
  const [table, setTable] = useState<string>(`${tableName}_${solutionLength}_${solutionLanguage}`);
  const [numberOfGuesses, setNumberOfGuesses] = useState<NumberOfGuessesType>(6);

  useEffect(() => {
    setTable(`${tableName}_${solutionLength}_${solutionLanguage}`);
  }, [solutionLength, solutionLanguage]);

  return (
    <AppContext.Provider
      value={{
        setSolutionLength,
        setSolutionLanguage,
        table,
        solutionLanguage,
        solutionLength,
        numberOfGuesses,
        setNumberOfGuesses,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
