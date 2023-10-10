import styled from "styled-components";

export const ToggleSwitch = styled.label`
  position: relative;
  ${({ theme }) => theme.display.inlineBlock};
  width: 100%;
  max-width: 50px;
  height: 25px;
  margin: 0 ${({ theme }) => theme.space.twelve}px;
`;

export const ToggleSwitchSlider = styled.span`
  position: absolute;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.green};
  border-radius: 25px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: background-color 0.2s ease;

  &:before {
    position: absolute;
    content: "";
    left: 2px;
    top: 2px;
    width: 21px;
    height: 21px;
    background-color: ${({ theme }) => theme.backgroundColor};
    border-radius: 50%;
    transition: transform 0.3s ease;
  }
`;

export const ToggleSwitchInput = styled.input`
  ${({ theme }) => theme.display.none};

  &:checked + ${ToggleSwitchSlider} {
    background-color: ${({ theme }) => theme.colors.green};
  }

  &:checked + ${ToggleSwitchSlider}::before {
    transform: translateX(25px);
    background-color: ${({ theme }) => theme.backgroundColor};
  }
`;
