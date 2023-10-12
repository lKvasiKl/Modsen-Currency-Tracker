import styled, { css } from "styled-components";

import { COLORS } from "@constants/styles/colors";
import { displayFlex } from "@constants/styles/mixins";

const CommonStyles = css`
  color: ${COLORS.white};
`;

export const Image = styled.img`
  user-select: none;
`;

export const Label = styled.label`
  ${CommonStyles}
  padding-left: ${({ theme }) => theme.space.M}px;
`;

export const InputContainer = styled.div`
  ${CommonStyles}
  ${displayFlex}
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkGray};
  margin-left: ${({ theme }) => theme.space.M}px;
  margin-bottom: ${({ theme }) => theme.space.XS}px;
  margin-right: ${({ theme }) => theme.space.M}px;
  height: 50px;
  justify-content: space-between;
  align-items: center;
`;

export const CurrencyInput = styled.input`
  ${CommonStyles}
  font-size: ${({ theme }) => theme.font.fontSize.S}px;
  height: 50px;
  border: none;
  background: transparent;
  outline: none;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: textfield;
    appearance: none;
    margin: ${({ theme }) => theme.space.XXS0};
  }
`;

export const CurrencyContainer = styled.div`
  ${CommonStyles}
  ${displayFlex}
  margin: ${({ theme }) => theme.space.XXS}px ${({ theme }) => theme.space.M}px;
  padding: ${({ theme }) => theme.space.XXS}px ${({ theme }) => theme.space.S}px;
  border: 1px solid ${({ theme }) => theme.colors.darkGray};
  gap: ${({ theme }) => theme.space.S}px;
  align-items: center;
  background: transparent;
  width: 252px;
  border-radius: 3px;
`;

export const CurrencySelectContainer = styled(CurrencyContainer)`
  padding: ${({ theme }) => theme.space.XXS0};
`;

export const Text = styled.span`
  ${CommonStyles}
  font-size: ${({ theme }) => theme.font.fontSize.S}px;
  background: transparent;
  text-align: center;
`;

export const ConvertButton = styled.button`
  ${CommonStyles}
  margin: ${({ theme }) => theme.space.M}px;
  font-size: ${({ theme }) => theme.font.fontSize.S}px;
  background-color: ${({ theme }) => theme.colors.blue};
  height: 50px;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightBlue};
  }
`;
