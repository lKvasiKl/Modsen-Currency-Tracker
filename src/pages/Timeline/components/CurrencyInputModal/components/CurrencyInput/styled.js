import styled from "styled-components";

export const Label = styled.label`
  padding-left: 25px;
  color: ${({ theme }) => theme.textColor};
`;

export const InputContainer = styled.div`
  color: ${({ theme }) => theme.textColor};
  display: flex;
  height: 50px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkGray};
  align-items: center;
  margin: 0 25px 15px 25px;
`;

export const Input = styled.input`
  background: transparent;
  font-size: ${({ theme }) => theme.fontSize.s};
  height: 50px;
  color: ${({ theme }) => theme.textColor};
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
