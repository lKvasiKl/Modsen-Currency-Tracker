import styled from "styled-components";

import { COLORS } from "@constants/styles/colors";
import {
  displayFlex,
  flexColumn,
  lineHeightMedium,
} from "@constants/styles/mixins";

const maxMobileWidthXXS = ({ theme }) => theme.media.XXS;
const maxMobileWidthXS = ({ theme }) => theme.media.XS;

const darkGrayColor = ({ theme }) => theme.colors.darkGray;
const borderGrayColor = ({ theme }) => theme.colors.borderGray;
const cardLightGrayColor = ({ theme }) => theme.colors.cardLightGray;
const spaceM = ({ theme }) => theme.space.M;
const spaceL = ({ theme }) => theme.space.L;
const spaceXL = ({ theme }) => theme.space.XL;
const fontSizeXS = ({ theme }) => theme.font.fontSize.XS;
const fontSizeM = ({ theme }) => theme.font.fontSize.M;
const fontSizeL = ({ theme }) => theme.font.fontSize.L;
const fontWeightXS = ({ theme }) => theme.font.fontWeight.XS;
const fontWeightS = ({ theme }) => theme.font.fontWeight.S;

export const CurrencyContainer = styled.div`
  ${displayFlex}
  gap: ${spaceM}px;
  margin-bottom: ${spaceXL}px;
  cursor: ${({ $isChartCanBuild }) =>
    !$isChartCanBuild ? "pointer" : "arrow"};
  padding: ${spaceL}px;
  border: 1px solid ${darkGrayColor};
  background-color: ${borderGrayColor};
  transition: transform 0.5s;
  border-radius: 8px;
  width: 100%;
  max-width: 520px;
  align-items: center;

  &:hover {
    transform: ${({ $isChartCanBuild }) =>
      !$isChartCanBuild ? "scale(1.03)" : "none"};
    box-shadow: ${({ $isChartCanBuild }) =>
      !$isChartCanBuild ? `0px 0px 25px 4px ${COLORS.shadowGreen}` : "none"};
    cursor: pointer;
  }

  @media (max-width: ${({ theme }) => theme.media.XXS}px) {
    height: 100px;
  }
`;

export const Image = styled.img`
  user-select: none;

  @media (max-width: ${maxMobileWidthXXS}px) {
    width: 50px;
    height: 50px;
  }
`;

export const TextContainer = styled.div`
  ${flexColumn}
`;

export const Title = styled.p`
  ${lineHeightMedium}
  color: ${cardLightGrayColor};
  font-size: ${fontSizeL}px;
  font-weight: ${fontWeightS};

  @media (max-width: ${maxMobileWidthXS}px) {
    font-size: ${fontSizeM}px;
  }

  @media (max-width: ${maxMobileWidthXXS}px) {
    line-height: normal;
  }
`;

export const Description = styled.span`
  ${lineHeightMedium}
  color: ${cardLightGrayColor};
  font-size: ${fontSizeXS}px;
  font-weight: ${fontWeightXS};
  text-align: left;

  @media (max-width: ${maxMobileWidthXXS}px) {
    line-height: normal;
  }
`;
