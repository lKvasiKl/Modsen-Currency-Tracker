import styled from "styled-components";

import { displayFlex } from "@constants/styles/mixins";

const whiteColor = ({ theme }) => theme.colors.white;
const darkGrayColor = ({ theme }) => theme.colors.darkGray;
const spaceXXS0 = ({ theme }) => theme.space.XXS0;
const spaceXS = ({ theme }) => theme.space.XS;
const spaceM = ({ theme }) => theme.space.M;
const fontSizeS = ({ theme }) => theme.font.fontSize.S;

export const Label = styled.label`
  padding-left: ${spaceM}px;
  color: ${whiteColor};
`;

export const InputContainer = styled.div`
  ${displayFlex}
  color: ${whiteColor};
  border-bottom: 1px solid ${darkGrayColor};
  margin-left: ${spaceM}px;
  margin-bottom: ${spaceXS}px;
  margin-right: ${spaceM}px;
  align-items: center;
  height: 50px;
`;

export const Input = styled.input`
  font-size: ${fontSizeS}px;
  color: ${whiteColor};
  height: 50px;
  background: transparent;
  border: none;
  outline: none;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    margin: ${spaceXXS0};
    -webkit-appearance: none;
    -moz-appearance: textfield;
    appearance: none;
  }
`;
