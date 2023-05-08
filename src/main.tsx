import { MantineProvider } from "@mantine/core";
import React from "react";
import ReactDOM from "react-dom/client";
import { SWRConfig } from "swr";
import { App } from "./App.tsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SWRConfig>
      {/* SWRConfig is used to provide the context for the useFetch hook */}
      <MantineProvider withGlobalStyles withNormalizeCSS>
        {/* MantineProvider is used to provide the context for the Mantine components */}
        <App />
      </MantineProvider>
    </SWRConfig>
  </React.StrictMode>
);
