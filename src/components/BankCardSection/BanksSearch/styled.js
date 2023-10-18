import styled from "styled-components";

import { displayFlex, flexRow } from "@constants/styles/mixins";

const maxMobileWidthXXS = ({ theme }) => theme.media.XXS;

const darkBlueBackground = ({ theme }) => theme.colors.darkBlue;
const lightGrayColor = ({ theme }) => theme.colors.lightGray;
const darkGrayColor = ({ theme }) => theme.colors.darkGray;
const purpuleBlueColor = ({ theme }) => theme.colors.purpuleBlue;
const spaceS = ({ theme }) => theme.space.S;
const spaceM = ({ theme }) => theme.space.M;
const spaceXXS = ({ theme }) => theme.space.XXS;
const spaceXL80 = ({ theme }) => theme.space.XL80;
const fontSizeXS = ({ theme }) => theme.font.fontSize.XS;
const fontWeightS = ({ theme }) => theme.font.fontWeight.S;
const borderGrayBackground = ({ theme }) => theme.colors.borderGray;

export const SearchWrapper = styled.div`
  position: relative;
  max-width: 450px;
  width: 100%;

  @media (max-width: ${maxMobileWidthXXS}px) {
    max-width: 350px;
  }
`;

export const SearchContainer = styled.div`
  ${flexRow}
  background-color: ${darkBlueBackground};
  margin-top: ${spaceM}px;
  margin-bottom: ${spaceXL80}px;
  gap: ${spaceS}px;
  height: 65px;
  border-radius: 5px;
`;

export const Input = styled.input`
  padding-left: ${spaceS}px;
  font-size: ${fontSizeXS}px;
  font-weight: ${fontWeightS};
  color: ${lightGrayColor};
  font-style: normal;
  height: 65px;
  width: 100%;
  background-color: transparent;
  outline: none;
  border: none;
`;

export const Image = styled.img`
  margin-right: ${spaceS}px;
  align-self: center;
  user-select: none;
`;

export const SearchList = styled.ul`
  border: 1px solid ${darkGrayColor};
  width: 100%;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translateX(-50%);
  list-style: none;
  overflow-y: auto;
  border-radius: 5px;
  z-index: 1;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: ${borderGrayBackground};
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

export const SearchListItem = styled.li`
  ${displayFlex}
  padding: ${spaceXXS}px ${spaceM}px;
  background-color: ${darkBlueBackground};
  border-bottom: 1px solid ${darkGrayColor};
  gap: ${spaceS}px;
  color: ${lightGrayColor};

  &:hover {
    background-color: ${purpuleBlueColor};
  }
  cursor: pointer;
  align-items: center;
`;
