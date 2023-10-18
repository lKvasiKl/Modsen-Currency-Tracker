import styled from "styled-components";

const darkGreenColor = ({ theme }) => theme.colors.darkGreen;
const yellowColor = ({ theme }) => theme.colors.yellow;
const whiteColor = ({ theme }) => theme.colors.white;
const redColor = ({ theme }) => theme.colors.red;
const spaceXXS = ({ theme }) => theme.space.XXS;
const spaceS = ({ theme }) => theme.space.S;
const fontSizeS = ({ theme }) => theme.font.fontSize.S;

export const Button = styled.button`
  background-color: ${darkGreenColor};
  color: ${whiteColor};
  margin: ${spaceS}px;
  font-size: ${fontSizeS}px;
  border-radius: 25px;
  border: none;
  height: 50px;
  cursor: pointer;

  &:hover {
    background-color: ${yellowColor};
  }
`;

export const Text = styled.p`
  margin-bottom: ${spaceXXS}px;
  color: ${whiteColor};
  align-self: center;
  width: 250px;
  text-align: center;
`;

export const Error = styled(Text)`
  color: ${redColor};
`;
