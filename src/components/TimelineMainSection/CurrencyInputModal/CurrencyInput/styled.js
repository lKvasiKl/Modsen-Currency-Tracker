import styled from "styled-components";

import { COLORS } from "@constants/styles/colors";

export const Label = styled.label`
  padding-left: ${({ theme }) => theme.space.twentyFive}px;
  color: ${COLORS.white};
`;

export const InputContainer = styled.div`
  color: ${COLORS.white};
  ${({ theme }) => theme.display.flex};
  height: 50px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkGray};
  align-items: center;
  margin-left: ${({ theme }) => theme.space.twentyFive}px;
  margin-bottom: ${({ theme }) => theme.space.fifteen}px;
  margin-right: ${({ theme }) => theme.space.twentyFive}px;
`;

export const Input = styled.input`
  background: transparent;
  font-size: ${({ theme }) => theme.font.fontSize.S}px;
  height: 50px;
  color: ${COLORS.white};
  border: none;
  outline: none;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: textfield;
    appearance: none;
    margin: ${({ theme }) => theme.space.zero};
  }
`;
