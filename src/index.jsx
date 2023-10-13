import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary, App } from "@components";
import { AppThemeProvider } from "@providers/AppThemeProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));

const renderApp = () => {
  root.render(
    <BrowserRouter>
      <ErrorBoundary>
        <AppThemeProvider>
          <App />
        </AppThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>,
  );
};

renderApp();
