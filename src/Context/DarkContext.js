import { createContext, useState } from "react";

const DarkContext = createContext();

export const DarkContextProvider = ({ children }) => {
  const [dark, setDark] = useState( true);

  return (<DarkContext.Provider  value={{dark , setDark}}
  >{children}</DarkContext.Provider>);
};

export default DarkContext
