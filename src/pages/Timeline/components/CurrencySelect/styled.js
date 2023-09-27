import styled from "styled-components";

export const Select = styled.select`
  background-color: transparent;
  max-width: 400px;
  color: #ffffff;
  font-size: 30px;
  border: none;
  outline: none;
  padding-right: 25px;
  cursor: pointer;
  margin-bottom: 155px;
`;

export const Option = styled.option`
  &:hover {
    cursor: pointer;
  }
`;
