import styled from "styled-components";

export const Select = styled.select`
  background-color: transparent;
  max-width: 400px;
  color: ${({ theme }) => theme.textColor};
  font-size: ${({ theme }) => theme.fontSize.s};
  border: none;
  outline: none;
  padding-right: 25px;
  cursor: pointer;
  margin-bottom: 155px;
`;

export const Option = styled.option`
  background-color: ${({ theme }) => theme.backgroundColor};

  &:hover {
    cursor: pointer;
  }
`;
