import styled from "styled-components";

export const DateContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  justify-content: center;
`;

export const Button = styled.button`
  background-color: transparent;
  cursor: pointer;
  color: ${({ theme }) => theme.textColor};
  height: 25px;
  width: 25px;
  border: none;
  border-radius: 25px;
  font-weight: bold;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkGray};
  }
`;

export const DateTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.textColor};
  margin: 10px 0;
`;
