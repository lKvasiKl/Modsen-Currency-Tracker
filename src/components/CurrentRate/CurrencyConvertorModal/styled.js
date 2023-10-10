import styled, { css } from "styled-components";

import { COLORS } from "@constants/styles/colors";

const CommonStyles = css`
  color: ${COLORS.white};
`;

export const Image = styled.img``;

export const Label = styled.label`
  ${CommonStyles}
  padding-left: ${({ theme }) => theme.space.twentyFive}px;
`;

export const InputContainer = styled.div`
  ${CommonStyles}
  height: 50px;
  ${({ theme }) => theme.display.flex};
  justify-content: space-between;
  border-bottom: 1px solid #474747;
  align-items: center;
  margin-left: ${({ theme }) => theme.space.twentyFive}px;
  margin-bottom: ${({ theme }) => theme.space.fifteen}px;
  margin-right: ${({ theme }) => theme.space.twentyFive}px;
`;

export const CurrencyInput = styled.input`
  ${CommonStyles}
  background: transparent;
  font-size: ${({ theme }) => theme.font.fontSize.S}px;
  height: 50px;
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

export const CurrencyContainer = styled.div`
  ${CommonStyles}
  margin: ${({ theme }) => theme.space.ten}px ${({ theme }) =>
    theme.space.twentyFive}px;
  padding: ${({ theme }) => theme.space.ten}px
    ${({ theme }) => theme.space.twenty}px;
  ${({ theme }) => theme.display.flex};
  align-items: center;
  background: transparent;
  border-radius: 3px;
  border: 1px solid #474747;
  gap: ${({ theme }) => theme.space.twenty}px;
`;

export const CurrencySelectContainer = styled(CurrencyContainer)`
  padding: ${({ theme }) => theme.space.zero};
`;

export const Text = styled.span`
  ${CommonStyles}
  background: transparent;
  font-size: ${({ theme }) => theme.font.fontSize.S}px;
  text-align: center;
`;

export const ConvertButton = styled.button`
  ${CommonStyles}
  height: 50px;
  margin: ${({ theme }) => theme.space.twentyFive}px;
  background: transparent;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: ${({ theme }) => theme.font.fontSize.S}px;
  background-color: ${({ theme }) => theme.colors.blue};

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightBlue};
  }
`;
