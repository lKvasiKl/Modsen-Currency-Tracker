import { useState } from "react";

import { ToggleSwitch, ToggleSwitchInput, ToggleSwitchSlider } from "./styled";

const Switch = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggleClick = () => {
    setIsToggled((prevState) => !prevState);
  };

  return (
    <ToggleSwitch>
      <ToggleSwitchInput
        checked={isToggled}
        type="checkbox"
        onChange={handleToggleClick}
      />
      <ToggleSwitchSlider />
    </ToggleSwitch>
  );
};

export default Switch;
