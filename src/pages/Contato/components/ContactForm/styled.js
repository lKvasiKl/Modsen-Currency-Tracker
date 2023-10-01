import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.textColor};
  padding-top: 10px;
`;

export const Label = styled.label`
  background: transparent;
  font-size: ${({ theme }) => theme.fontSize.s};
`;

export const InputContainer = styled.div`
  color: ${({ theme }) => theme.textColor};
  height: 35px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkGray};
  align-items: center;
  margin-bottom: 15px;
`;

export const Input = styled.input`
  color: ${({ theme }) => theme.textColor};
  background-color: transparent;
  font-size: ${({ theme }) => theme.fontSize.s};
  height: 30px;
  border: none;
  outline: none;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.darkGreen};
  color: ${({ theme }) => theme.textColor};
  height: 50px;
  margin: 20px 0;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.s};

  &:hover {
    background-color: ${({ theme }) => theme.colors.yellow};
  }
`;
