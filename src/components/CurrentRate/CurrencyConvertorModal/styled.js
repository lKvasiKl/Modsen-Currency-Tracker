import styled, { css } from "styled-components";

import { displayFlex } from "@constants/styles/mixins";

const whiteColor = ({ theme }) => theme.colors.white;
const darkGrayColor = ({ theme }) => theme.colors.darkGray;
const blueColor = ({ theme }) => theme.colors.blue;
const lightBlueColor = ({ theme }) => theme.colors.lightBlue;
const spaceXXS0 = ({ theme }) => theme.space.XXS0;
const spaceXXS = ({ theme }) => theme.space.XXS;
const spaceXS = ({ theme }) => theme.space.XS;
const spaceS = ({ theme }) => theme.space.S;
const spaceM = ({ theme }) => theme.space.M;
const fontSizeS = ({ theme }) => theme.font.fontSize.S;

const CommonStyles = css`
  color: ${whiteColor};
`;

export const Image = styled.img`
  user-select: none;
`;

export const Label = styled.label`
  ${CommonStyles}
  padding-left: ${spaceM}px;
`;

export const InputContainer = styled.div`
  ${CommonStyles}
  ${displayFlex}
  border-bottom: 1px solid ${darkGrayColor};
  margin-left: ${spaceM}px;
  margin-bottom: ${spaceXS}px;
  margin-right: ${spaceM}px;
  height: 50px;
  justify-content: space-between;
  align-items: center;
`;

export const CurrencyInput = styled.input`
  ${CommonStyles}
  font-size: ${fontSizeS}px;
  height: 50px;
  border: none;
  background: transparent;
  outline: none;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: textfield;
    appearance: none;
    margin: ${spaceXXS0};
  }
`;

export const CurrencyContainer = styled.div`
  ${CommonStyles}
  ${displayFlex}
  margin: ${spaceXXS}px ${spaceM}px;
  padding: ${spaceXXS}px ${spaceS}px;
  border: 1px solid ${darkGrayColor};
  gap: ${spaceS}px;
  align-items: center;
  background: transparent;
  width: 252px;
  border-radius: 3px;
`;

export const CurrencySelectContainer = styled(CurrencyContainer)`
  padding: ${spaceXXS0};
`;

export const Text = styled.span`
  ${CommonStyles}
  font-size: ${fontSizeS}px;
  background: transparent;
  text-align: center;
`;

export const ConvertButton = styled.button`
  ${CommonStyles}
  margin: ${spaceM}px;
  font-size: ${fontSizeS}px;
  background-color: ${blueColor};
  height: 50px;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${lightBlueColor};
  }
`;
