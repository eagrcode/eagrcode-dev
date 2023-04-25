import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";

// set component prop types
interface types {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const Context = createContext<types>({ isOpen: false, setIsOpen() {} });
export const useContextProvider = () => useContext(Context);

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return <Context.Provider value={{ isOpen, setIsOpen }}>{children}</Context.Provider>;
};
