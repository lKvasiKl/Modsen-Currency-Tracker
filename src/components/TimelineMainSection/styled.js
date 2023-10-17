import styled from "styled-components";

import { displayFlex, flexColumn } from "@constants/styles/mixins";

const maxMobileWidthXXS = ({ theme }) => theme.media.XXS;

const textColor = ({ theme }) => theme.textColor;
const yellowColor = ({ theme }) => theme.colors.yellow;
const darkGreenColor = ({ theme }) => theme.colors.darkGreen;
const spaceS = ({ theme }) => theme.space.S;
const spaceL = ({ theme }) => theme.space.L;
const spaceXL = ({ theme }) => theme.space.XL;
const fontSizeS = ({ theme }) => theme.font.fontSize.S;

export const Main = styled.main`
  ${flexColumn}
  align-items: center;
`;

export const ChartSection = styled.section`
  margin-bottom: ${spaceXL}px;
  padding: 0 ${spaceL}px;
  width: 100%;
  max-width: 1140px;
`;

export const ButtonContainer = styled.div`
  ${displayFlex}
  margin-bottom: ${spaceXL}px;

  @media (max-width: ${maxMobileWidthXXS}px) {
    flex-direction: column;
  }
`;

export const Button = styled.button`
  background-color: ${darkGreenColor};
  color: ${textColor};
  margin: ${spaceS}px;
  font-size: ${fontSizeS}px;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  height: 50px;
  width: 100%;
  max-width: 230px;

  &:hover {
    background-color: ${yellowColor};
  }

  @media (max-width: ${maxMobileWidthXXS}px) {
    margin-bottom: ${spaceS}px;
  }
`;
