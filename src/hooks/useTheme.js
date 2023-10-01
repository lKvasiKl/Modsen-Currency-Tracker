import { useContext } from "react";
import { ThemeContext } from "@providers/AppThemeProvider";

const useTheme = () => {
  return useContext(ThemeContext);
};

export { useTheme };
