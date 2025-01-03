// import { createContext, useContext, useState } from "react";

import { createContext, useContext, useState } from "react";

// export const GlobalContext = createContext("");
// export const useGlobalContext = () => useContext(GlobalContext);

// const GlobalContextProvider = ({ children }) => {
//   const [globalData, setGlobalData] = useState({ loggedIn: false });

//   const updateGlobalData = (data) => {
//     setGlobalData((prev) => {
//       return {
//         ...prev,
//         ...data,
//       };
//     });
//   };

//   return (
//     <>
//       <GlobalContext.Provider value={[globalData, updateGlobalData]}>{children}</GlobalContext.Provider>
//     </>
//   );
// };

// export default GlobalContextProvider;

export const globalContext = createContext();
export const useGlobalContext = () => useContext(globalContext);

const GlobalContextProvider = ({ children }) => {
  const [globalData, setGlobalData] = useState({ name: "test" });

  const updateGlobalData = (data) => {
    setGlobalData((prev) => {
      return {
        ...prev,
        ...data,
      };
    });
  };

  return <GlobalContextProvider.provider value={[globalData, updateGlobalData]}>{children}</GlobalContextProvider.provider>;
};
