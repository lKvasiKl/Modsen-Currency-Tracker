import styled from "styled-components";

import { displayFlex } from "@constants/styles/mixins";

const textColor = ({ theme }) => theme.textColor;
const darkGrayColor = ({ theme }) => theme.colors.darkGray;
const purpuleBlueColor = ({ theme }) => theme.colors.purpuleBlue;
const borderGrayColor = ({ theme }) => theme.colors.borderGray;
const spaceXXS = ({ theme }) => theme.space.XXS;
const spaceS = ({ theme }) => theme.space.S;
const spaceM = ({ theme }) => theme.space.M;
const fontSizeS = ({ theme }) => theme.font.fontSize.S;

export const SelectButton = styled.button`
  ${displayFlex}
  padding: ${spaceXXS}px ${spaceS}px;
  color: ${textColor};
  font-size: ${fontSizeS}px;
  cursor: pointer;
  background: transparent;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border: none;

  &:hover {
    background-color: ${purpuleBlueColor};
  }
`;

export const ButtonContentContainer = styled.div`
  ${displayFlex}
  gap: ${spaceS}px;
  align-items: center;
  background: transparent;
`;

export const ArrowIcon = styled.img`
  transition: transform 0.3s;

  transform: ${({ $isOpen }) =>
    $isOpen ? "rotate(180deg)" : "rotate(360deg)"};
`;

export const SelectList = styled.ul`
  position: absolute;
  top: 74%;
  width: inherit;
  left: 35px;
  list-style-type: none;
  height: 183px;
  overflow: auto;

  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: ${borderGrayColor};
    border-right: 1px solid ${darkGrayColor};
    border-bottom: 1px solid ${darkGrayColor};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${darkGrayColor};

    &:hover {
      background-color: ${purpuleBlueColor};
    }
  }
`;

export const SelectsItem = styled.li`
  ${displayFlex}
  padding: ${spaceXXS}px ${spaceM}px;
  background-color: ${borderGrayColor};
  border-bottom: 1px solid ${darkGrayColor};
  border-right: 1px solid ${darkGrayColor};
  border-left: 1px solid ${darkGrayColor};
  gap: ${spaceS}px;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: ${purpuleBlueColor};
  }
`;
