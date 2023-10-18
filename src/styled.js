import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    * {
        margin: ${({ theme }) => theme.space.XXS0};
        padding: ${({ theme }) => theme.space.XXS0};
        box-sizing: border-box;
        font-family: ${({ theme }) => theme.font.fontFamily.popins};
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
