import styled, { css } from "styled-components";

const CommonStyles = css`
  color: #ffffff;
`;

export const Image = styled.img``;

export const Label = styled.label`
  ${CommonStyles}
  padding-left: 25px;
`;

export const InputContainer = styled.div`
  ${CommonStyles}
  height: 50px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #474747;
  align-items: center;
  margin: 0 25px 15px 25px;
`;

export const CurrencyInput = styled.input`
  ${CommonStyles}
  background: transparent;
  font-size: ${({ theme }) => theme.fontSize.s};
  height: 50px;
  border: none;
  outline: none;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: textfield;
    appearance: none;
    margin: 0;
  }
`;

export const CurrencyContainer = styled.div`
  ${CommonStyles}
  margin: 10px 25px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  background: transparent;
  border-radius: 3px;
  border: 1px solid #474747;
  gap: 20px;
`;

export const CurrencySelectContainer = styled(CurrencyContainer)`
  padding: 0;
`;

export const Text = styled.span`
  ${CommonStyles}
  background: transparent;
  font-size: ${({ theme }) => theme.fontSize.s};
  text-align: center;
`;

export const ConvertButton = styled.button`
  ${CommonStyles}
  height: 50px;
  margin: 25px;
  background: transparent;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.s};
  background-color: #3b71d3;

  &:hover {
    background-color: #6193ed;
  }
`;
