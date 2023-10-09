import { ThemeProvider } from "styled-components";

import { useTheme } from "@hooks/useTheme";
import Router from "@routes";
import { THEME } from "@constants/theme";

const App = () => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={THEME[theme]}>
      <Router />
    </ThemeProvider>
  );
};

export default App;
