import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Poppins;
    }

    body {
      background-color: ${({ theme }) => theme.backgroundColor};
    }
`;

export const OverflowHidden = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;