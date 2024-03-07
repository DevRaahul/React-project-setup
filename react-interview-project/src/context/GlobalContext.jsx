import { createContext, useContext, useState } from "react";

export const GlobalContext = createContext("");
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalContextProvider = ({ children }) => {
  const [globalData, setGlobalData] = useState({ loggedIn: false });

  const updateGlobalData = (data) => {
    setGlobalData((prev) => {
      return {
        ...prev,
        ...data,
      };
    });
  };

  return (
    <>
      <GlobalContext.Provider value={[globalData, updateGlobalData]}>{children}</GlobalContext.Provider>
    </>
  );
};

export default GlobalContextProvider;
