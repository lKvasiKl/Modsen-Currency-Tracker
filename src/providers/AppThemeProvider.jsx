import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getCache, saveCache } from "@utils/cachingFunctions";

export const ThemeContext = createContext({ theme: "dark" });

const CACHE_THEME_KEY = process.env.REACT_APP_CACHE_THEME_KEY;

const AppThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const cachedTheme = getCache(CACHE_THEME_KEY);

    if (Object.entries(cachedTheme).length !== 0) {
      setTheme(cachedTheme);
    } else {
      saveCache(CACHE_THEME_KEY, "dark");
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
