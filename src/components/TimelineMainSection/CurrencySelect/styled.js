import styled from "styled-components";

export const Select = styled.select`
  color: ${({ theme }) => theme.textColor};
  font-size: ${({ theme }) => theme.font.fontSize.S}px;
  padding-right: ${({ theme }) => theme.space.M}px;
  margin-bottom: ${({ theme }) => theme.space.XXL155}px;
  cursor: pointer;
  border: none;
  outline: none;
  background-color: transparent;
  max-width: 400px;
`;

export const Option = styled.option`
  background-color: ${({ theme }) => theme.backgroundColor};

  &:hover {
    cursor: pointer;
  }
`;
