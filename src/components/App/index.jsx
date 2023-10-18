import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";

import { Router } from "@components";
import { ThemeContext } from "@providers/AppThemeProvider";
import { THEME } from "@constants/theme";

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={THEME[theme]}>
      <Router />
    </ThemeProvider>
  );
};

export default App;
