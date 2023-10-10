import styled from "styled-components";

export const Form = styled.form`
  ${({ theme }) => theme.display.flexColumn};
  color: ${({ theme }) => theme.textColor};
  padding-top: ${({ theme }) => theme.space.ten}px;
`;

export const Label = styled.label`
  background: transparent;
  font-size: ${({ theme }) => theme.font.fontSize.S}px;
`;

export const InputContainer = styled.div`
  color: ${({ theme }) => theme.textColor};
  height: 35px;
  ${({ theme }) => theme.display.flex};
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkGray};
  align-items: center;
  margin-bottom: ${({ theme }) => theme.space.fifteen}px;
`;

export const Input = styled.input`
  color: ${({ theme }) => theme.textColor};
  background-color: transparent;
  font-size: ${({ theme }) => theme.font.fontSize.S}px;
  height: 30px;
  border: none;
  outline: none;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.darkGreen};
  color: ${({ theme }) => theme.textColor};
  height: 50px;
  margin: ${({ theme }) => theme.space.twenty}px 0;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  font-size: ${({ theme }) => theme.font.fontSize.S}px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.yellow};
  }
`;
