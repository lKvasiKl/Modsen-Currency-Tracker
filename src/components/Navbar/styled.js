import styled from "styled-components";

import {
  displayFlex,
  displayNone,
  displayInlineBlock,
} from "@constants/styles/mixins";

const maxMobileWidthS = ({ theme }) => theme.media.S;
const maxMobileWidthL = ({ theme }) => theme.media.L;
const maxMobileWidthXL = ({ theme }) => theme.media.XL;

const textColor = ({ theme }) => theme.textColor;
const backgroundColor = ({ theme }) => theme.backgroundColor;
const greenColor = ({ theme }) => theme.colors.green;
const spaceXS12 = ({ theme }) => theme.space.XS12;
const spaceL = ({ theme }) => theme.space.L;
const spaceXXL = ({ theme }) => theme.space.XXL;
const fontSizeS = ({ theme }) => theme.font.fontSize.S;
const fontWeightXS = ({ theme }) => theme.font.fontWeight.XS;

export const NavbarContainer = styled.nav`
  ${displayFlex}
  background-color: ${backgroundColor};
  padding: 0 ${spaceXXL}px;
  align-items: center;
  justify-content: space-between;
  height: 103px;

  @media (max-width: ${maxMobileWidthXL}px) {
    padding: 0 ${spaceL}px;
  }
`;

export const Logotype = styled.img`
  user-select: none;
`;

export const NavLinksContainer = styled.ul`
  ${displayFlex}
  justify-content: space-between;
  list-style-type: none;
  width: 657px;

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

  @media (max-width: ${maxMobileWidthL}px) {
    gap: ${spaceL}px;
    justify-content: center;
  }

  @media (max-width: ${maxMobileWidthS}px) {
    ${displayNone}
  }
`;
export const SwitchContainer = styled.div`
  width: 100%;
  display: contents;
  max-width: 50px;

  @media (max-width: ${maxMobileWidthS}px) {
    ${displayNone}
  }
`;

export const ToggleSwitchLabel = styled.label`
  ${displayInlineBlock}
  margin: 0 ${spaceXS12}px;
  width: 50px;
  position: relative;
  height: 25px;
`;
