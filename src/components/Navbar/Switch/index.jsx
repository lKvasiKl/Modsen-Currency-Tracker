import { useTheme } from "@hooks/useTheme";
import { saveCache } from "@utils/cachingFunctions";

import { ToggleSwitch, ToggleSwitchInput, ToggleSwitchSlider } from "./styled";

const CACHE_THEME_KEY = process.env.REACT_APP_CACHE_THEME_KEY;

const Switch = () => {
  const { theme, setTheme } = useTheme();

  const handleToggleClick = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    saveCache(CACHE_THEME_KEY, newTheme);
  };

  const isLightTheme = theme === "light";

  return (
    <ToggleSwitch>
      <ToggleSwitchInput
        checked={isLightTheme}
        type="checkbox"
        onChange={handleToggleClick}
      />
      <ToggleSwitchSlider />
    </ToggleSwitch>
  );
};

export default Switch;
