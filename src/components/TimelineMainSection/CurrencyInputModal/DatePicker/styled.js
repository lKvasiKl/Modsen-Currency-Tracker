import styled from "styled-components";

import { displayFlex } from "@constants/styles/mixins";

const whiteColor = ({ theme }) => theme.colors.white;
const darkGrayColor = ({ theme }) => theme.colors.darkGray;
const spaceXXS = ({ theme }) => theme.space.XXS;
const spaceXS = ({ theme }) => theme.space.XS;
const fontSizeM = ({ theme }) => theme.font.fontSize.M;

export const DateContainer = styled.div`
  ${displayFlex}
  gap: ${spaceXS}px;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  color: ${whiteColor};
  background-color: transparent;
  cursor: pointer;
  height: 25px;
  width: 25px;
  border: none;
  border-radius: 25px;
  font-weight: bold;

  &:hover {
    background-color: ${darkGrayColor};
  }
`;

export const DateTitle = styled.p`
  color: ${whiteColor};
  font-size: ${fontSizeM}px;
  margin: ${spaceXXS}px 0;
`;
