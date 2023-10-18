import styled from "styled-components";

import { displayFlex, flexColumn } from "@constants/styles/mixins";

const maxMobileWidthXL = ({ theme }) => theme.media.XL;
const maxMobileWidthXXS = ({ theme }) => theme.media.XL;

const textColor = ({ theme }) => theme.textColor;
const darkGrayColor = ({ theme }) => theme.colors.darkGray;
const spaceM = ({ theme }) => theme.space.M;
const spaceXL = ({ theme }) => theme.space.XL;
const spaceXL86 = ({ theme }) => theme.space.XL86;
const fontSizeM = ({ theme }) => theme.font.fontSize.M;
const fontWeightXS = ({ theme }) => theme.font.fontWeight.XS;

export const CardsSectionContainer = styled.section`
  ${flexColumn}
  margin-bottom: ${spaceXL86}px;
  width: 100%;
  max-width: 1140px;

  @media (max-width: ${maxMobileWidthXL}px) {
    padding: 0 ${({ theme }) => theme.space.L}px;
  }
`;

export const CardsSectionTitle = styled.p`
  color: ${textColor};
  font-size: ${fontSizeM}px;
  font-weight: ${fontWeightXS};
  border-bottom: 2px solid ${darkGrayColor};
  padding-bottom: ${spaceM}px;
  margin-bottom: ${spaceXL}px;
  line-height: 41px;
  font-style: normal;
  max-width: 520px;
  flex-shrink: 0;

  @media (max-width: ${maxMobileWidthXL}px) {
    max-width: unset;
  }

  @media (max-width: ${maxMobileWidthXXS}px) {
    font-size: ${fontSizeM}px;
  }
`;

export const CardsList = styled.div`
  ${displayFlex}
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: ${maxMobileWidthXL}px) {
    justify-content: unset;
    flex-direction: column;
  }
`;
