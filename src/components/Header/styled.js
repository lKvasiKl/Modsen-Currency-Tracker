import styled from "styled-components";

import {
  displayFlex,
  normalFontStyle,
  flexColumn,
  displayNone,
} from "@constants/styles/mixins";

const maxMobileWidthXXS = ({ theme }) => theme.media.XXS;
const maxMobileWidthM = ({ theme }) => theme.media.M;
const maxMobileWidthXL = ({ theme }) => theme.media.XL;

const darkGreenColor = ({ theme }) => theme.colors.darkGreen;
const yellowColor = ({ theme }) => theme.colors.yellow;
const lightGreenColor = ({ theme }) => theme.colors.lightGreen;
const cardLightGrayColor = ({ theme }) => theme.colors.cardLightGray;
const shadowGrayColor = ({ theme }) => theme.colors.shadowGray;
const emeraldGreenColor = ({ theme }) => theme.colors.emeraldGreen;
const spaceXXS0 = ({ theme }) => theme.space.XXS0;
const spaceL33 = ({ theme }) => theme.space.L33;
const spaceXL58 = ({ theme }) => theme.space.XL58;
const spaceXL70 = ({ theme }) => theme.space.XL70;
const spaceXXL310 = ({ theme }) => theme.space.XXL310;
const fontSizeS = ({ theme }) => theme.font.fontSize.S;
const fontSizeM = ({ theme }) => theme.font.fontSize.M;
const fontSizeL = ({ theme }) => theme.font.fontSize.L;
const fontSizeXL = ({ theme }) => theme.font.fontSize.XL;
const fontSizeXXL = ({ theme }) => theme.font.fontSize.XXL;
const fontWeightXS = ({ theme }) => theme.font.fontWeight.XS;
const fontWeightL = ({ theme }) => theme.font.fontWeight.L;

export const StyledHeader = styled.header`
  ${displayFlex}
  padding-top: ${spaceL33}px;
  padding-right: ${spaceXXL310}px;
  padding-bottom: ${spaceXL58}px;
  background: linear-gradient(
    253deg,
    ${shadowGrayColor} 12%,
    ${emeraldGreenColor} 91%
  );
  justify-content: center;

  @media (max-width: ${maxMobileWidthXL}px) {
    padding-right: ${spaceXXS0};
  }
`;

export const SectionContainer = styled.section`
  ${displayFlex}
  align-items: center;
`;

export const TextContainer = styled.div`
  ${flexColumn}
  align-items: flex-end;
  text-align: center;

  @media (max-width: ${maxMobileWidthXL}px) {
    align-items: center;
  }
`;

export const Title = styled.h1`
  ${normalFontStyle}
  font-size: ${fontSizeXXL}px;
  font-weight: ${fontWeightL};
  padding-right: ${spaceXL70}px;
  background: linear-gradient(
    90deg,
    ${darkGreenColor} 1%,
    ${yellowColor} 49%,
    ${lightGreenColor} 99%
  );
  flex-shrink: 0;
  text-align: right;
  max-width: 760px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: ${maxMobileWidthXL}px) {
    padding: ${spaceXXS0};
    text-align: center;
  }

  @media (max-width: ${maxMobileWidthM}px) {
    font-size: ${fontSizeXL}px;
  }

  @media (max-width: ${maxMobileWidthXXS}px) {
    font-size: ${fontSizeL}px;
  }
`;

export const Quote = styled.p`
  color: ${cardLightGrayColor};
  font-size: ${fontSizeM}px;
  font-weight: ${fontWeightXS};
  text-align: center;
  flex-shrink: 0;
  max-width: 400px;
  font-style: normal;
  line-height: 47px;

  @media (max-width: ${maxMobileWidthXXS}px) {
    font-size: ${fontSizeS}px;
  }
`;

export const Logotype = styled.img`
  flex-shrink: 0;
  user-select: none;

  @media (max-width: ${maxMobileWidthXL}px) {
    ${displayNone}
  }
`;
