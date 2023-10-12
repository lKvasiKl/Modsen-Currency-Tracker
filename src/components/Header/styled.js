import styled from "styled-components";

import { COLORS } from "@constants/styles/colors";
import {
  displayFlex,
  fontNormal,
  flexColumn,
  displayNone,
} from "@constants/styles/mixins";

export const StyledHeader = styled.header`
  ${displayFlex}
  padding-top: ${({ theme }) => theme.space.L33}px;
  padding-right: ${({ theme }) => theme.space.XXL310}px;
  padding-bottom: ${({ theme }) => theme.space.XL58}px;
  background: linear-gradient(
    253deg,
    ${COLORS.shadowGray} 11.77%,
    ${COLORS.emeraldGreen} 91.12%
  );
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.media.XL}px) {
    padding-right: ${({ theme }) => theme.space.XXS0};
  }
`;

export const SectionContainer = styled.section`
  ${displayFlex}
  align-items: center;
`;

export const TextContainer = styled.div`
  ${flexColumn}
  align-items: flex-end;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.media.XL}px) {
    align-items: center;
  }
`;

export const Title = styled.h1`
  ${fontNormal}
  font-size: ${({ theme }) => theme.font.fontSize.XXL}px;
  font-weight: ${({ theme }) => theme.font.fontWeight.L};
  padding-right: ${({ theme }) => theme.space.XL70}px;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.darkGreen} 0.18%,
    ${({ theme }) => theme.colors.yellow} 49.3%,
    ${({ theme }) => theme.colors.lightGreen} 99.88%
  );
  flex-shrink: 0;
  text-align: right;
  max-width: 760px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: ${({ theme }) => theme.media.XL}px) {
    padding: ${({ theme }) => theme.space.XXS0};
    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.media.M}px) {
    font-size: ${({ theme }) => theme.font.fontSize.XL}px;
  }

  @media (max-width: ${({ theme }) => theme.media.XXS}px) {
    font-size: ${({ theme }) => theme.font.fontSize.L}px;
  }
`;

export const Quote = styled.p`
  color: ${({ theme }) => theme.colors.cardLightGray};
  font-size: ${({ theme }) => theme.font.fontSize.M}px;
  font-weight: ${({ theme }) => theme.font.fontWeight.XS};
  text-align: center;
  flex-shrink: 0;
  max-width: 400px;
  font-style: normal;
  line-height: 47px;

  @media (max-width: ${({ theme }) => theme.media.XXS}px) {
    font-size: ${({ theme }) => theme.font.fontSize.S}px;
  }
`;

export const Logotype = styled.img`
  flex-shrink: 0;
  user-select: none;

  @media (max-width: ${({ theme }) => theme.media.XL}px) {
    ${displayNone}
  }
`;
