import styled from "styled-components";

import { displayFlex, flexColumn } from "@constants/styles/mixins";

const textColor = ({ theme }) => theme.textColor;
const darkGrayColor = ({ theme }) => theme.colors.darkGray;
const darkGreenColorBackground = ({ theme }) => theme.colors.darkGreen;
const yellowColorBackground = ({ theme }) => theme.colors.yellow;
const spaceS = ({ theme }) => theme.space.S;
const spaceXS = ({ theme }) => theme.space.XS;
const spaceXXS = ({ theme }) => theme.space.XXS;
const fontSizeS = ({ theme }) => theme.font.fontSize.S;

export const Form = styled.form`
  ${flexColumn}
  color: ${textColor};
  padding-top: ${spaceXXS}px;
`;

export const Label = styled.label`
  font-size: ${fontSizeS}px;
  background: transparent;
`;

export const InputContainer = styled.div`
  ${displayFlex}
  color: ${textColor};
  border-bottom: 1px solid ${darkGrayColor};
  margin-bottom: ${spaceXS}px;
  height: 35px;
  justify-content: space-between;
  align-items: center;
`;

export const Input = styled.input`
  color: ${textColor};
  font-size: ${fontSizeS}px;
  background-color: transparent;
  height: 30px;
  border: none;
  outline: none;
`;

export const Button = styled.button`
  background-color: ${darkGreenColorBackground};
  color: ${textColor};
  margin: ${spaceS}px 0;
  font-size: ${fontSizeS}px;
  height: 50px;
  border-radius: 25px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${yellowColorBackground};
  }
`;
