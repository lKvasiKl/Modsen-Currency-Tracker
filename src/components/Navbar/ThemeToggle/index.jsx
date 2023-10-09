import { useTheme } from "@hooks/useTheme";
import { saveCache } from "@utils/cachingFunctions";
import { ENV_VARIABLES } from "@constants/envVariables";

import { ToggleSwitch, ToggleSwitchInput, ToggleSwitchSlider } from "./styled";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const handleToggleClick = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    saveCache(ENV_VARIABLES.cacheThemeKey, newTheme);
  };

  const isLightTheme = theme === "light";

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
