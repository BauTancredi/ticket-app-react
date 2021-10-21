import { useContext, useEffect } from "react";
import { UiContext } from "../context/UIContext";

export const useHideMenu = (hide) => {
  const { showMenu, hideMenu } = useContext(UiContext);

  useEffect(() => {
    hide ? hideMenu() : showMenu();
  }, [hide, hideMenu, showMenu]);
};
