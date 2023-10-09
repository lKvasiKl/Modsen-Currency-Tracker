import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

import { getCache, saveCache } from "@utils/cachingFunctions";
import { ENV_VARIABLES } from "@constants/envVariables";

export const ThemeContext = createContext({ theme: "dark" });

const AppThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const cachedTheme = getCache(ENV_VARIABLES.cacheThemeKey);

    if (Object.entries(cachedTheme).length !== 0) {
      setTheme(cachedTheme);
    } else {
      saveCache(ENV_VARIABLES.cacheThemeKey, "dark");
    }
  }, []);

  const value = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

AppThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppThemeProvider;
