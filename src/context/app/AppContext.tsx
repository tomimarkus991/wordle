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
type SolutionLanguageType = "eng" | "est" | "ger";

type InitialContextType = {
  solutionLength: SolutionLengthType;
  setSolutionLength: Dispatch<SetStateAction<SolutionLengthType>>;
  solutionLanguage: SolutionLanguageType;
  setSolutionLanguage: Dispatch<SetStateAction<SolutionLanguageType>>;
  table: string;
};

const initContextData: InitialContextType = {
  solutionLength: 5,
  setSolutionLength: () => {},
  solutionLanguage: "eng",
  setSolutionLanguage: () => {},
  table: "solutions_5_eng",
};

const AppContext = createContext(initContextData);

export const useApp = () => useContext(AppContext);

export const AppProvider = ({ children }: ProviderProps) => {
  const tableName = "solutions";
  const [solutionLength, setSolutionLength] = useState<SolutionLengthType>(5);
  const [solutionLanguage, setSolutionLanguage] = useState<SolutionLanguageType>("eng");
  const [table, setTable] = useState<string>(`${tableName}_${solutionLength}_${solutionLanguage}`);

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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
