import styled from "styled-components";

import { fontNormal, flexColumn } from "@constants/styles/mixins";

export const Main = styled.main`
  ${flexColumn}
  align-items: center;
`;

export const Title = styled.h2`
  ${fontNormal}
  color: ${({ theme }) => theme.textColor};
  font-size: ${({ theme }) => theme.font.fontSize.L}px;
  font-weight: ${({ theme }) => theme.font.fontWeight.S};
  margin-top: ${({ theme }) => theme.space.XXL110}px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.media.S}px) {
    padding: 0 ${({ theme }) => theme.space.S}px;
  }
`;
