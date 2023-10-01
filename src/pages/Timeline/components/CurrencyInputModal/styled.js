import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.darkGreen};
  color: ${({ theme }) => theme.textColor};
  height: 50px;
  margin: 20px;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.s};

  &:hover {
    background-color: ${({ theme }) => theme.colors.yellow};
  }
`;
