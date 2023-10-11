import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { ErrorBoundary, App } from "@components";
import AppThemeProvider from "@providers/AppThemeProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <AppThemeProvider>
          <App />
        </AppThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>,
);
