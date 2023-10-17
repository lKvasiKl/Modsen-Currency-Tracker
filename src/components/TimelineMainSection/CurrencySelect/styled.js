import styled from "styled-components";

const textColor = ({ theme }) => theme.textColor;
const backgroundColor = ({ theme }) => theme.backgroundColor;
const spaceM = ({ theme }) => theme.space.M;
const spaceXXL155 = ({ theme }) => theme.space.XXL155;
const fontSizeS = ({ theme }) => theme.font.fontSize.S;

export const Select = styled.select`
  color: ${textColor};
  font-size: ${fontSizeS}px;
  padding-right: ${spaceM}px;
  margin-bottom: ${spaceXXL155}px;
  cursor: pointer;
  border: none;
  outline: none;
  background-color: transparent;
  max-width: 400px;
`;

export const Option = styled.option`
  background-color: ${backgroundColor};

  &:hover {
    cursor: pointer;
  }
`;
