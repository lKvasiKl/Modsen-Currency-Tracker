import styled, { keyframes } from "styled-components";

import { displayFlex } from "@constants/styles/mixins";

const movePupil = keyframes`
    0%,
    100% {
        transform: translate(0, 0);
    }
    25% {
        transform: translate(-10px, -10px);
    }
    50% {
        transform: translate(10px, 10px);
    }
    75% {
        transform: translate(-10px, 10px);
    }
`;

const textColor = ({ theme }) => theme.textColor;
const backgroundColor = ({ theme }) => theme.backgroundColor;
const darkGreenColor = ({ theme }) => theme.colors.darkGreen;
const yellowColor = ({ theme }) => theme.colors.yellow;
const lightGreenColor = ({ theme }) => theme.colors.lightGreen;
const redColor = ({ theme }) => theme.colors.red;
const spaceXXS2 = ({ theme }) => theme.space.XXS2;
const spaceXXS = ({ theme }) => theme.space.XXS;
const spaceXS = ({ theme }) => theme.space.XS;
const spaceXS12 = ({ theme }) => theme.space.XS12;
const spaceS24 = ({ theme }) => theme.space.S24;
const fontSizeXS = ({ theme }) => theme.font.fontSize.XS;
const fontSizeL = ({ theme }) => theme.font.fontSize.L;
const fontSizeXL = ({ theme }) => theme.font.fontSize.XL;
const fontWeightXXS = ({ theme }) => theme.font.fontWeight.XXS;
const fontWeightM = ({ theme }) => theme.font.fontWeight.M;

export const ErrorPage = styled.main`
  ${displayFlex}
  gap: ${spaceXXS}px;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  a {
    color: ${lightGreenColor};
    border: 1px solid ${darkGreenColor};
    font-size: ${fontSizeXS}px;
    font-weight: ${fontWeightXXS};
    padding: ${spaceXS12}px ${spaceS24}px;
    box-shadow: 0px 7px 0px -2px ${darkGreenColor};
    margin-top: ${spaceXS}px;
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    border-radius: 15px;

    &:hover {
      box-shadow: none;
      background-color: ${darkGreenColor};
      color: ${textColor};
    }
  }
`;

export const EyesContainer = styled.div`
  ${displayFlex}
  gap: ${spaceXXS2}px;
  justify-content: center;
`;

export const Eye = styled.div`
  background: linear-gradient(
    35deg,
    ${darkGreenColor} 1%,
    ${yellowColor} 49%,
    ${lightGreenColor} 99%
  );
  border-radius: 50%;
  display: grid;
  width: 80px;
  height: 80px;
  place-items: center;
`;

export const Pupil = styled.div`
  background-color: ${backgroundColor};
  animation: ${movePupil} 2s infinite ease-in-out;
  width: 30px;
  border-radius: 50%;
  height: 30px;
  transform-origin: center;
`;

export const Title = styled.h1`
  font-size: ${fontSizeXL}px;
  font-weight: ${fontWeightM};
  background: linear-gradient(
    90deg,
    ${darkGreenColor} 1%,
    ${yellowColor} 49%,
    ${lightGreenColor} 99%
  );
  text-align: center;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Description = styled.p`
  margin-top: ${spaceXXS}px;
  font-size: ${fontSizeL}px;
  font-weight: ${fontWeightXXS};
  color: ${redColor};
`;
