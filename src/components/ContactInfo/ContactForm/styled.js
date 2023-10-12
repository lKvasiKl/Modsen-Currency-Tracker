import styled from "styled-components";

import { displayFlex, flexColumn } from "@constants/styles/mixins";

export const Form = styled.form`
  ${flexColumn}
  color: ${({ theme }) => theme.textColor};
  padding-top: ${({ theme }) => theme.space.XXS}px;
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.font.fontSize.S}px;
  background: transparent;
`;

export const InputContainer = styled.div`
  ${displayFlex}
  color: ${({ theme }) => theme.textColor};
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkGray};
  margin-bottom: ${({ theme }) => theme.space.XS}px;
  height: 35px;
  justify-content: space-between;
  align-items: center;
`;

export const Input = styled.input`
  color: ${({ theme }) => theme.textColor};
  font-size: ${({ theme }) => theme.font.fontSize.S}px;
  background-color: transparent;
  height: 30px;
  border: none;
  outline: none;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.darkGreen};
  color: ${({ theme }) => theme.textColor};
  margin: ${({ theme }) => theme.space.S}px 0;
  font-size: ${({ theme }) => theme.font.fontSize.S}px;
  height: 50px;
  border-radius: 25px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.yellow};
  }
`;
