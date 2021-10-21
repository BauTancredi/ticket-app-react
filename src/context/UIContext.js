import React, { createContext, useState } from "react";

export const UiContext = createContext();

export const UiProvider = ({ children }) => {
  const [isHideMenu, setIsHideMenu] = useState(false);

  const showMenu = () => {
    setIsHideMenu(false);
  };

  const hideMenu = () => {
    setIsHideMenu(true);
  };

  return (
    <UiContext.Provider value={{ hideMenu, showMenu, isHideMenu }}>
      {children}
    </UiContext.Provider>
  );
};
