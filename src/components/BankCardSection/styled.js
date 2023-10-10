import styled from "styled-components";

export const Main = styled.main`
  ${({ theme }) => theme.display.flexColumn};
  align-items: center;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.textColor};
  font-size: ${({ theme }) => theme.font.fontSize.L}px;
  font-weight: ${({ theme }) => theme.font.fontWeight.S};
  margin-top: ${({ theme }) => theme.space.oneHundredTen}px;
  ${({ theme }) => theme.font.fontNormal};
  text-align: center;

  @media (max-width: ${({ theme }) => theme.media.S}px) {
    padding: 0 ${({ theme }) => theme.space.twenty}px;
  }
`;
