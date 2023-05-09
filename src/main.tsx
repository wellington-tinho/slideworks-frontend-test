import { MantineProvider } from "@mantine/core";
import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { queryClient } from "./service/queryClient";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}> {/* use react-query to cache the api requests */}
      <MantineProvider withGlobalStyles withNormalizeCSS> {/* use mantine to style the components pagination */}
        <App />
      </MantineProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
