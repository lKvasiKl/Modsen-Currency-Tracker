import styled from "styled-components";

export const ErrorBoundaryContainer = styled.div`
  ${({ theme }) => theme.display.flexColumn};
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-weight: bolder;
  gap: ${({ theme }) => theme.space.ten}px;

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
