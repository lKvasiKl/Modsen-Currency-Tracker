import styled from "styled-components";

import { displayFlex, displayNone } from "@constants/styles/mixins";

export const BurgerMenuContainer = styled.div`
  width: 30px;
  height: 30px;
  position: relative;
  cursor: pointer;

  @media (min-width: ${({ theme }) => theme.media.S + 1}px) {
    ${displayNone}
  }
`;

export const BurgerLine = styled.div`
  background-color: ${({ theme }) => theme.textColor};
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
  color: ${({ theme }) => theme.textColor};
  height: ${({ $isOpen }) => ($isOpen ? "0" : "auto")};
  background-color: ${({ theme }) => theme.backgroundColor};
  padding-bottom: ${({ theme }) => theme.space.XS}px;
  list-style-type: none;
  z-index: 1;
  align-items: center;
  flex-direction: column;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  position: absolute;
  width: 100%;
  left: 0;
  top: 10%;

  li {
    padding-bottom: ${({ theme }) => theme.space.XS}px;
  }

  a {
    font-size: ${({ theme }) => theme.font.fontSize.S}px;
    font-weight: ${({ theme }) => theme.font.fontWeight.XS};
    color: ${({ theme }) => theme.textColor};
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.colors.green};
    }

    &.active {
      color: ${({ theme }) => theme.colors.green};
      text-decoration: underline;
      text-underline-offset: 5px;
    }
  }
`;
