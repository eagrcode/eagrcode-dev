// react
import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";

// create and export theme context
export const ThemeContext = createContext<types>({ theme: "dark", setTheme() {} });
// create and export context consumer
export const useTheme = () => useContext(ThemeContext);

// set prop types
interface types {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState("dark");

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};
