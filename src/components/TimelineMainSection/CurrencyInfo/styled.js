import styled from "styled-components";

import { COLORS } from "@constants/styles/colors";
import {
  displayFlex,
  flexColumn,
  fontNormal49,
} from "@constants/styles/mixins";

export const CurrencyContainer = styled.div`
  ${displayFlex}
  gap: ${({ theme }) => theme.space.M}px;
  margin-bottom: ${({ theme }) => theme.space.XL}px;
  cursor: ${($isChartCanBuild) => (!$isChartCanBuild ? "pointer" : "arrow")};
  padding: ${({ theme }) => theme.space.L}px;
  border: 1px solid ${({ theme }) => theme.colors.darkGray};
  background-color: ${({ theme }) => theme.colors.borderGray};
  transition: transform 0.5s;
  border-radius: 8px;
  width: 100%;
  max-width: 520px;
  align-items: center;

  &:hover {
    transform: ${({ $isChartCanBuild }) =>
      !$isChartCanBuild ? "scale(1.03)" : "none"};
    box-shadow: ${({ $isChartCanBuild }) =>
      !$isChartCanBuild ? `0px 0px 25px 4px ${COLORS.shadowGreen}` : "none"};
    cursor: pointer;
  }

  @media (max-width: ${({ theme }) => theme.media.XXS}px) {
    height: 100px;
  }
`;

export const Image = styled.img`
  user-select: none;

  @media (max-width: ${({ theme }) => theme.media.XXS}px) {
    width: 50px;
    height: 50px;
  }
`;

export const TextContainer = styled.div`
  ${flexColumn}
`;

export const Title = styled.p`
  ${fontNormal49}
  color: ${({ theme }) => theme.colors.cardLightGray};
  font-size: ${({ theme }) => theme.font.fontSize.L}px;
  font-weight: ${({ theme }) => theme.font.fontWeight.S};

  @media (max-width: ${({ theme }) => theme.media.XS}px) {
    font-size: ${({ theme }) => theme.font.fontSize.M}px;
  }

  @media (max-width: ${({ theme }) => theme.media.XXS}px) {
    line-height: normal;
  }
`;

export const Description = styled.span`
  ${fontNormal49}
  color: ${({ theme }) => theme.colors.cardLightGray};
  font-size: ${({ theme }) => theme.font.fontSize.XS}px;
  font-weight: ${({ theme }) => theme.font.fontWeight.XS};
  text-align: left;

  @media (max-width: ${({ theme }) => theme.media.XXS}px) {
    line-height: normal;
  }
`;
