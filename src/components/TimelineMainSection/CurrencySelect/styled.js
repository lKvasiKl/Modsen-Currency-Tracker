import styled from "styled-components";

export const Select = styled.select`
  background-color: transparent;
  max-width: 400px;
  color: ${({ theme }) => theme.textColor};
  font-size: ${({ theme }) => theme.font.fontSize.S}px;
  border: none;
  outline: none;
  padding-right: ${({ theme }) => theme.space.twentyFive}px;
  cursor: pointer;
  margin-bottom: ${({ theme }) => theme.space.oneHundredFiftyFive}px;
`;

export const Option = styled.option`
  background-color: ${({ theme }) => theme.backgroundColor};

  &:hover {
    cursor: pointer;
  }
`;
