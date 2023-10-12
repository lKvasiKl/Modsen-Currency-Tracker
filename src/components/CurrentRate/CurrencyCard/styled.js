import styled from "styled-components";

import { COLORS } from "@constants/styles/colors";
import {
  displayFlex,
  displayBlock,
  fontNormal49,
  fontNormal41,
} from "@constants/styles/mixins";

export const CardContainer = styled.div`
  ${displayFlex}
  padding: ${({ theme }) => theme.space.L}px;
  gap: ${({ theme }) => theme.space.L}px;
  border: 1px solid ${({ theme }) => theme.colors.darkGray};
  background-color: ${({ theme }) => theme.colors.borderGray};
  margin-bottom: ${({ theme }) => theme.space.XL56}px;
  transition: ${({ $isInteractive }) =>
    $isInteractive ? "transform 0.5s" : "none"};
  border-radius: 8px;
  align-items: center;
  width: 100%;
  max-width: 520px;
  height: fit-content;

  &:hover {
    transform: ${({ $isInteractive }) =>
      $isInteractive ? "scale(1.03)" : "none"};
    cursor: ${({ $isInteractive }) => ($isInteractive ? "pointer" : "arrow")};
    box-shadow: ${({ $isInteractive }) =>
      $isInteractive ? `0px 0px 25px 4px ${COLORS.shadowGreen}` : ""};
  }

  @media (max-width: ${({ theme }) => theme.media.XL}px) {
    max-width: unset;
  }

  @media (max-width: ${({ theme }) => theme.media.XXS}px) {
    height: 100px;
    padding-right: ${({ theme }) => theme.space.L}px;
  }
`;

export const Image = styled.img`
  user-select: none;

  @media (max-width: ${({ theme }) => theme.media.XXS}px) {
    width: 50px;
    height: 50px;
  }
`;

export const CardContent = styled.div`
  ${displayBlock}
`;

export const CardTitle = styled.p`
  ${fontNormal49}
  color: ${({ theme }) => theme.colors.cardLightGray};
  font-size: ${({ theme }) => theme.font.fontSize.L}px;
  font-weight: ${({ theme }) => theme.font.fontWeight.S};

  @media (max-width: ${({ theme }) => theme.media.XXS}px) {
    font-size: ${({ theme }) => theme.font.fontSize.S}px;
    line-height: normal;
  }
`;

export const CurrencyRate = styled.span`
  ${fontNormal41}
  color: ${({ theme }) => theme.colors.lightBlue};
  font-size: ${({ theme }) => theme.font.fontSize.L}px;
  font-weight: ${({ theme }) => theme.font.fontWeight.XS};

  @media (max-width: ${({ theme }) => theme.media.XXS}px) {
    font-size: ${({ theme }) => theme.font.fontSize.M}px;
    line-height: normal;
  }
`;
