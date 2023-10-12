import React, { useContext } from "react";

import { ThemeContext } from "@providers/AppThemeProvider";
import { saveCache } from "@utils/dataCaching";
import { ENV_VARIABLES } from "@constants/envVariables";
import { THEME } from "./config";

import { ToggleSwitch, ToggleSwitchInput, ToggleSwitchSlider } from "./styled";

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleToggleClick = () => {
    const newTheme = theme === THEME.light ? THEME.dark : THEME.light;
    setTheme(newTheme);
    saveCache(ENV_VARIABLES.cacheThemeKey, newTheme);
  };

  const isLightTheme = theme === THEME.light;

  return (
    <ToggleSwitch>
      <ToggleSwitchInput
        checked={isLightTheme}
        data-cy="nav-switch"
        type="checkbox"
        onChange={handleToggleClick}
      />
      <ToggleSwitchSlider />
    </ToggleSwitch>
  );
};

export default ThemeToggle;
