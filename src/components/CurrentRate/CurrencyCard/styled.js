import styled from "styled-components";

import { COLORS } from "@constants/styles/colors";
import {
  displayFlex,
  displayBlock,
  lineHeightMedium,
  lineHeightSmall,
} from "@constants/styles/mixins";

const maxMobileWidthXL = ({ theme }) => theme.media.XL;
const maxMobileWidthXXS = ({ theme }) => theme.media.XXS;

const darkGrayColor = ({ theme }) => theme.colors.darkGray;
const cardLightColor = ({ theme }) => theme.colors.cardLightGray;
const lightBlueColor = ({ theme }) => theme.colors.lightBlue;
const spaceL = ({ theme }) => theme.space.L;
const spaceXL56 = ({ theme }) => theme.space.XL56;
const fontSizeS = ({ theme }) => theme.font.fontSize.S;
const fontSizeM = ({ theme }) => theme.font.fontSize.M;
const fontSizeL = ({ theme }) => theme.font.fontSize.L;
const fontWeightXS = ({ theme }) => theme.font.fontSize.XS;
const fontWeightS = ({ theme }) => theme.font.fontWeight.S;
const borderGrayBackground = ({ theme }) => theme.colors.borderGray;

export const CardContainer = styled.div`
  ${displayFlex}
  padding: ${spaceL}px;
  gap: ${spaceL}px;
  border: 1px solid ${darkGrayColor};
  background-color: ${borderGrayBackground};
  margin-bottom: ${spaceXL56}px;
  transition: ${({ $isInteractive }) =>
    $isInteractive ? "transform 0.5s" : "none"};
  border-radius: 8px;
  align-items: center;
  width: 100%;
  max-width: 520px;
  height: fit-content;

  &:hover {
    transform: ${({ $isInteractive }) =>
      $isInteractive ? "scale(1.03)" : "none"};
    cursor: ${({ $isInteractive }) => ($isInteractive ? "pointer" : "arrow")};
    box-shadow: ${({ $isInteractive }) =>
      $isInteractive ? `0px 0px 25px 4px ${COLORS.shadowGreen}` : ""};
  }

  @media (max-width: ${maxMobileWidthXL}px) {
    max-width: unset;
  }

  @media (max-width: ${maxMobileWidthXXS}px) {
    height: 100px;
    padding-right: ${spaceL}px;
  }
`;

export const Image = styled.img`
  user-select: none;

  @media (max-width: ${maxMobileWidthXXS}px) {
    width: 50px;
    height: 50px;
  }
`;

export const CardContent = styled.div`
  ${displayBlock}
`;

export const CardTitle = styled.p`
  ${lineHeightMedium}
  color: ${cardLightColor};
  font-size: ${fontSizeL}px;
  font-weight: ${fontWeightS};

  @media (max-width: ${maxMobileWidthXXS}px) {
    font-size: ${fontSizeS}px;
    line-height: normal;
  }
`;

export const CurrencyRate = styled.span`
  ${lineHeightSmall}
  color: ${lightBlueColor};
  font-size: ${fontSizeL}px;
  font-weight: ${fontWeightXS};

  @media (max-width: ${maxMobileWidthXXS}px) {
    font-size: ${fontSizeM}px;
    line-height: normal;
  }
`;
