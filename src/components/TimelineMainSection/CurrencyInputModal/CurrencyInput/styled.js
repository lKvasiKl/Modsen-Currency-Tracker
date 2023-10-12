import styled from "styled-components";

import { COLORS } from "@constants/styles/colors";
import { displayFlex } from "@constants/styles/mixins";

export const Label = styled.label`
  padding-left: ${({ theme }) => theme.space.M}px;
  color: ${COLORS.white};
`;

export const InputContainer = styled.div`
  ${displayFlex}
  color: ${COLORS.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkGray};
  margin-left: ${({ theme }) => theme.space.M}px;
  margin-bottom: ${({ theme }) => theme.space.XS}px;
  margin-right: ${({ theme }) => theme.space.M}px;
  align-items: center;
  height: 50px;
`;

export const Input = styled.input`
  font-size: ${({ theme }) => theme.font.fontSize.S}px;
  color: ${COLORS.white};
  height: 50px;
  background: transparent;
  border: none;
  outline: none;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    margin: ${({ theme }) => theme.space.XXS0};
    -webkit-appearance: none;
    -moz-appearance: textfield;
    appearance: none;
  }
`;
