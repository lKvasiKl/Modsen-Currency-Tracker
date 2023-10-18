import styled from "styled-components";

import { displayInlineBlock, displayNone } from "@constants/styles/mixins";

const backgroundColor = ({ theme }) => theme.backgroundColor;
const greenColor = ({ theme }) => theme.colors.green;
const spaceXS12 = ({ theme }) => theme.space.XS12;

export const ToggleSwitch = styled.label`
  ${displayInlineBlock}
  margin: 0 ${spaceXS12}px;
  position: relative;
  width: 100%;
  max-width: 50px;
  height: 25px;
`;

export const ToggleSwitchSlider = styled.span`
  background-color: ${greenColor};
  position: absolute;
  cursor: pointer;
  border-radius: 25px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: background-color 0.2s ease;

  &:before {
    background-color: ${backgroundColor};
    position: absolute;
    content: "";
    left: 2px;
    top: 2px;
    width: 21px;
    height: 21px;
    border-radius: 50%;
    transition: transform 0.3s ease;
  }
`;

export const ToggleSwitchInput = styled.input`
  ${displayNone}

  &:checked + ${ToggleSwitchSlider} {
    background-color: ${greenColor};
  }

  &:checked + ${ToggleSwitchSlider}::before {
    background-color: ${backgroundColor};
    transform: translateX(25px);
  }
`;
