import styled from "styled-components";

import { flexColumn } from "@constants/styles/mixins";

const redColor = ({ theme }) => theme.colors.red;
const yellowColor = ({ theme }) => theme.colors.yellow;
const lightGreenColor = ({ theme }) => theme.colors.lightGreen;
const greenColor = ({ theme }) => theme.colors.green;
const spaceXXS = ({ theme }) => theme.space.XXS;
const fontSizeL = ({ theme }) => theme.font.fontSize.L;

export const ErrorBoundaryContainer = styled.div`
  ${flexColumn}
  gap: ${spaceXXS}px;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-weight: bolder;

  a {
    color: ${greenColor};
  }
`;

export const ErrorTitle = styled.h1`
  background: linear-gradient(
    90deg,
    ${greenColor} 1%,
    ${yellowColor} 49%,
    ${lightGreenColor} 99%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Error = styled.p`
  color: ${redColor};
  max-width: 800px;
  word-wrap: break-word;
`;

export const Text = styled.p`
  color: ${greenColor};
  font-size: ${fontSizeL}px;
`;
