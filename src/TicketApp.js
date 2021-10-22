import React from "react";

import { SocketProvider } from "./context/SocketContext.js";
import { UiProvider } from "./context/UIContext.js";
import { RouterPage } from "./pages/RouterPage.jsx";

export const TicketApp = () => {
  return (
    <>
      <SocketProvider>
        <UiProvider>
          <RouterPage />
        </UiProvider>
      </SocketProvider>
    </>
  );
};
