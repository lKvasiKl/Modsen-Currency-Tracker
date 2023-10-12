import styled from "styled-components";

import { flexColumn, fontNormal150 } from "@constants/styles/mixins";

export const LinksSection = styled.section`
  ${flexColumn}
`;

export const Title = styled.span`
  ${fontNormal150}
  color: ${({ theme }) => theme.textColor};
  font-size: ${({ theme }) => theme.font.fontSize.L}px;
  font-weight: ${({ theme }) => theme.font.fontWeight.S};
`;

export const LinksContainer = styled.div`
  ${flexColumn}
  padding-top: ${({ theme }) => theme.space.L40}px;
  gap: ${({ theme }) => theme.space.S17}px;

  a {
    color: ${({ theme }) => theme.colors.gray};
    font-size: ${({ theme }) => theme.font.fontSize.M}px;
    font-weight: ${({ theme }) => theme.font.fontWeight.S};
    line-height: normal;
    font-style: normal;
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.colors.green};
    }
  }
`;
