import styled, { createGlobalStyle } from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const OverflowHidden = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;
