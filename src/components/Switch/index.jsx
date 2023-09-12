import React, { useState } from "react";
import { ToggleSwitch, ToggleSwitchInput, ToggleSwitchSlider } from "./styled";

const Switch = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggleClick = () => {
    setIsToggled((prevState) => !prevState);
  };

  return (
    <ToggleSwitch>
      <ToggleSwitchInput
        type="checkbox"
        checked={isToggled}
        onChange={handleToggleClick}
      />
      <ToggleSwitchSlider />
    </ToggleSwitch>
  );
};

export default Switch;
