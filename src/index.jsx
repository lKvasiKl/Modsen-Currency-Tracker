import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { ErrorBoundary, App } from "@components";
import AppThemeProvider from "@providers/AppThemeProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <HashRouter>
      <ErrorBoundary>
        <AppThemeProvider>
          <App />
        </AppThemeProvider>
      </ErrorBoundary>
    </HashRouter>
  </React.StrictMode>,
);
