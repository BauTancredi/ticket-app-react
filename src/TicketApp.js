import React from "react";
import { UiProvider } from "./context/UIContext.js";
import { RouterPage } from "./pages/RouterPage.jsx";

export const TicketApp = () => {
  return (
    <>
      <UiProvider>
        <RouterPage />
      </UiProvider>
    </>
  );
};
