import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getCache, saveCache } from "@utils/dataCaching";
import { ENV_VARIABLES } from "@constants/envVariables";

const ThemeContext = createContext({ theme: "dark" });

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
