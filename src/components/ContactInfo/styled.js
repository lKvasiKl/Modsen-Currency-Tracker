import styled from "styled-components";

import {
  displayFlex,
  normalFontStyle,
  flexColumn,
} from "@constants/styles/mixins";

const maxMobileWidthL = ({ theme }) => theme.media.L;

const textColor = ({ theme }) => theme.textColor;
const darkGreenColor = ({ theme }) => theme.colors.darkGreen;
const yellowColor = ({ theme }) => theme.colors.yellow;
const lightGreenColor = ({ theme }) => theme.colors.lightGreen;
const grayColor = ({ theme }) => theme.colors.gray;
const greenColor = ({ theme }) => theme.colors.green;
const spaceXXS = ({ theme }) => theme.space.XXS;
const spaceXS = ({ theme }) => theme.space.XS;
const spaceS = ({ theme }) => theme.space.S;
const spaceL = ({ theme }) => theme.space.L;
const spaceXL = ({ theme }) => theme.space.XL;
const spaceXXL170 = ({ theme }) => theme.space.XXL170;
const fontSizeS = ({ theme }) => theme.font.fontSize.S;
const fontSizeM = ({ theme }) => theme.font.fontSize.M;
const fontSizeXL = ({ theme }) => theme.font.fontSize.XL;
const fontWeightS = ({ theme }) => theme.font.fontWeight.S;
const fontWeightL = ({ theme }) => theme.font.fontWeight.L;

export const Main = styled.main`
  ${flexColumn}
  align-items: center;
`;

export const Title = styled.h2`
  ${normalFontStyle}
  font-size: ${fontSizeXL}px;
  padding: ${spaceL}px 0;
  font-weight: ${fontWeightL};
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

export const ContactInfoWrapper = styled.div`
  ${displayFlex}
  border: 1px solid ${textColor};
  margin-left: ${spaceS}px;
  margin-bottom: ${spaceXXL170}px;
  margin-right: ${spaceS}px;
  padding: ${spaceL}px;
  gap: ${spaceXL}px;
  justify-content: space-between;
  max-width: 800px;
  height: fit-content;

  @media (max-width: ${maxMobileWidthL}px) {
    flex-direction: column;
  }
`;

export const InfoContainer = styled.div`
  ${flexColumn}

  @media (max-width: ${maxMobileWidthL}px) {
    flex-direction: column;
    order: -1;
  }
`;

export const InnerTitle = styled.h3`
  ${normalFontStyle}
  font-size: ${fontSizeM}px;
  padding-top: ${spaceXXS}px;
  padding-bottom: ${spaceXS}px;
  font-weight: ${fontWeightL};
  color: ${textColor};
  text-align: left;
`;

export const ContactContainer = styled.div`
  ${displayFlex}
  gap: ${spaceXXS}px;
`;

export const Link = styled.a`
  ${normalFontStyle}
  font-size: ${fontSizeS}px;
  color: ${grayColor};
  font-weight: ${fontWeightS};
  text-align: left;
  text-decoration: none;

  &:hover {
    color: ${greenColor};
  }
`;

export const Text = styled.p`
  ${normalFontStyle}
  font-size: ${fontSizeS}px;
  color: ${grayColor};
  text-align: left;
`;
