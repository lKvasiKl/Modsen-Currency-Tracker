import styled from "styled-components";

import { displayFlex, flexColumn } from "@constants/styles/mixins";

export const CardsSectionContainer = styled.section`
  ${flexColumn}
  margin-bottom: ${({ theme }) => theme.space.XL86}px;
  width: 100%;
  max-width: 1140px;

  @media (max-width: ${({ theme }) => theme.media.XL}px) {
    padding: 0 ${({ theme }) => theme.space.L}px;
  }
`;

export const CardsSectionTitle = styled.p`
  color: ${({ theme }) => theme.textColor};
  font-size: ${({ theme }) => theme.font.fontSize.M}px;
  font-weight: ${({ theme }) => theme.font.fontWeight.XS};
  border-bottom: 2px solid ${({ theme }) => theme.colors.darkGray};
  padding-bottom: ${({ theme }) => theme.space.M}px;
  margin-bottom: ${({ theme }) => theme.space.XL}px;
  line-height: 41px;
  font-style: normal;
  max-width: 520px;
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.media.XL}px) {
    max-width: unset;
  }

  @media (max-width: ${({ theme }) => theme.media.XXS}px) {
    font-size: ${({ theme }) => theme.font.fontSize.M}px;
  }
`;

export const CardsList = styled.div`
  ${displayFlex}
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.media.XL}px) {
    justify-content: unset;
    flex-direction: column;
  }
`;
