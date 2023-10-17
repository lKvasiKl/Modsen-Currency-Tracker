import styled from "styled-components";

import {
  displayFlex,
  flexRow,
  normalFontStyle,
  flexColumn,
  lineHeightLarge,
  displayNone,
} from "@constants/styles/mixins";

const maxMobileWidthS = ({ theme }) => theme.media.S;
const maxMobileWidthXL = ({ theme }) => theme.media.XL;

const textColor = ({ theme }) => theme.textColor;
const fontFamilyInter = ({ theme }) => theme.font.fontFamily.inter;
const darkGreenColor = ({ theme }) => theme.colors.darkGreen;
const yellowColor = ({ theme }) => theme.colors.yellow;
const lightGreenColor = ({ theme }) => theme.colors.lightGreen;
const grayColor = ({ theme }) => theme.colors.gray;
const spaceXXS = ({ theme }) => theme.space.XXS;
const spaceM = ({ theme }) => theme.space.M;
const spaceL = ({ theme }) => theme.space.L;
const spaceL35 = ({ theme }) => theme.space.L35;
const spaceL40 = ({ theme }) => theme.space.L40;
const spaceXL55 = ({ theme }) => theme.space.XL55;
const spaceXL79 = ({ theme }) => theme.space.XL79;
const spaceXL105 = ({ theme }) => theme.space.XXL105;
const fontSizeS = ({ theme }) => theme.font.fontSize.S;
const fontSizeM = ({ theme }) => theme.font.fontSize.M;
const fontWeightS = ({ theme }) => theme.font.fontWeight.S;
const fontWeightXS = ({ theme }) => theme.font.fontWeight.XS;
const fontWeightL = ({ theme }) => theme.font.fontWeight.L;

export const FooterContainer = styled.footer`
  ${displayFlex}
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: ${maxMobileWidthS}px) {
    padding: 0 ${spaceL}px;
    align-items: unset;
  }
`;

export const FooterWrapper = styled.section`
  ${flexRow}
  gap: ${spaceXL105}px;

  @media (max-width: ${maxMobileWidthXL}px) {
    gap: ${spaceL35}px;
    flex-direction: column;
  }
`;

export const InfoContainer = styled.div`
  ${flexColumn}
  gap: ${spaceM}px;
  max-width: 482px;
`;

export const Title = styled.div`
  ${displayFlex}
  gap: ${spaceXXS}px;

  @media (max-width: ${maxMobileWidthXL}px) {
    justify-content: center;
  }
`;

export const Image = styled.img`
  user-select: none;
`;

export const Text = styled.h3`
  ${normalFontStyle}
  font-size: ${fontSizeM}px;
  font-weight: ${fontWeightL};
  background: linear-gradient(
    90deg,
    ${darkGreenColor} 1%,
    ${yellowColor} 49%,
    ${lightGreenColor} 99%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Quote = styled.p`
  ${lineHeightLarge}
  color: ${textColor};
  font-size: ${fontSizeM}px;
  font-weight: ${fontWeightXS};

  @media (max-width: ${maxMobileWidthXL}px) {
    text-align: justify;
  }

  @media (max-width: ${maxMobileWidthS}px) {
    ${displayNone}
  }
`;

export const LinksContainer = styled.div`
  ${displayFlex}
  gap: ${spaceXL79}px;

  @media (max-width: ${maxMobileWidthS}px) {
    ${displayNone}
  }
`;

export const MobileLinksContainer = styled.div`
  ${flexColumn}

  @media (min-width: ${maxMobileWidthS + 1}px) {
    ${displayNone}
  }
`;

export const Copyright = styled.p`
  ${lineHeightLarge}
  color: ${grayColor};
  font-family: ${fontFamilyInter};
  font-size: ${fontSizeM}px;
  font-weight: ${fontWeightS};
  padding-top: ${spaceXL55}px;
  padding-bottom: ${spaceL40}px;
  user-select: none;

  @media (max-width: ${maxMobileWidthS}px) {
    font-size: ${fontSizeS}px;
    text-align: center;
  }
`;
