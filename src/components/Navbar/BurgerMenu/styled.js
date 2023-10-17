import styled from "styled-components";

import { displayFlex, displayNone } from "@constants/styles/mixins";

const maxMobileWidthS = ({ theme }) => theme.media.S + 1;

const textColor = ({ theme }) => theme.textColor;
const backgroundColor = ({ theme }) => theme.backgroundColor;
const greenColor = ({ theme }) => theme.colors.green;
const spaceXS = ({ theme }) => theme.space.XS;
const fontSizeS = ({ theme }) => theme.font.fontSize.S;
const fontWeightXS = ({ theme }) => theme.font.fontWeight.XS;

export const BurgerMenuContainer = styled.div`
  width: 30px;
  height: 30px;
  position: relative;
  cursor: pointer;

  @media (min-width: ${maxMobileWidthS}px) {
    ${displayNone}
  }
`;

export const BurgerLine = styled.div`
  background-color: ${textColor};
  width: 30px;
  height: 4px;
  position: absolute;
  transition: all 0.3s ease-in-out;
  transform-origin: center;
  border-radius: 4px;

  &:nth-of-type(1) {
    top: ${({ $isOpen }) => ($isOpen ? "50%" : "20%")};
    transform: ${({ $isOpen }) => ($isOpen ? "rotate(45deg)" : "rotate(0deg)")};
  }

  &:nth-of-type(2) {
    opacity: ${({ $isOpen }) => ($isOpen ? 0 : 1)};
    top: 50%;
  }

  &:nth-of-type(3) {
    top: ${({ $isOpen }) => ($isOpen ? "50%" : "80%")};
    transform: ${({ $isOpen }) =>
      $isOpen ? "rotate(-45deg)" : "rotate(0deg)"};
  }
`;

export const BurgerMenuItems = styled.ul`
  ${displayFlex}
  color: ${textColor};
  height: ${({ $isOpen }) => ($isOpen ? "0" : "auto")};
  background-color: ${backgroundColor};
  padding-bottom: ${spaceXS}px;
  list-style-type: none;
  align-items: center;
  flex-direction: column;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  position: absolute;
  width: 100%;
  left: 0;
  top: 10%;

  li {
    padding-bottom: ${spaceXS}px;
  }

  a {
    font-size: ${fontSizeS}px;
    font-weight: ${fontWeightXS};
    color: ${textColor};
    text-decoration: none;

    &:hover {
      color: ${greenColor};
    }

    &.active {
      color: ${greenColor};
      text-decoration: underline;
      text-underline-offset: 5px;
    }
  }
`;
