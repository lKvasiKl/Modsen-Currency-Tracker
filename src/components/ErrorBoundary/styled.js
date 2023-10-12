import styled from "styled-components";

import { flexColumn } from "@constants/styles/mixins";

export const ErrorBoundaryContainer = styled.div`
  ${flexColumn}
  gap: ${({ theme }) => theme.space.XXS}px;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-weight: bolder;

  a {
    color: ${({ theme }) => theme.colors.green};
  }
`;

export const ErrorTitle = styled.h1`
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.darkGreen} 0.18%,
    ${({ theme }) => theme.colors.yellow} 49.3%,
    ${({ theme }) => theme.colors.lightGreen} 99.88%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Error = styled.p`
  color: ${({ theme }) => theme.colors.red};
  max-width: 800px;
  word-wrap: break-word;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.green};
  font-size: ${({ theme }) => theme.font.fontSize.L}px;
`;
