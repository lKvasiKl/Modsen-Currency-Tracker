import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getCache, saveCache } from "@utils/dataCaching";
import { getEnvVariables, ENV_VARIABLE_KEYS } from "@constants/envVariables";

const THEME_KEY = getEnvVariables(ENV_VARIABLE_KEYS.cacheThemeKey);

const ThemeContext = createContext({ theme: "dark" });

const AppThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const cachedTheme = getCache(THEME_KEY);

    if (Object.entries(cachedTheme).length !== 0) {
      setTheme(cachedTheme);
    } else {
      saveCache(THEME_KEY, "dark");
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

AppThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AppThemeProvider, ThemeContext };
