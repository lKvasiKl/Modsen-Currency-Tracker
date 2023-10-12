import styled, { keyframes } from "styled-components";

import { displayFlex, fontNormal41 } from "@constants/styles/mixins";

const pulseAnimation = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
`;

export const UpdateInfoContainer = styled.section`
  ${displayFlex}
  padding: ${({ theme }) => theme.space.XL56}px
    ${({ theme }) => theme.space.XXS}px;
  gap: ${({ theme }) => theme.space.S18}px;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  animation: ${pulseAnimation} 2s ease-in-out infinite;
  user-select: none;

  @media (max-width: ${({ theme }) => theme.media.XXS}px) {
    width: 35px;
    height: 35px;
  }
`;

export const Text = styled.p`
  ${fontNormal41}
  color: ${({ theme }) => theme.colors.cardLightGray};
  font-size: ${({ theme }) => theme.font.fontSize.L}px;
  font-weight: ${({ theme }) => theme.font.fontWeight.XS};

  @media (max-width: ${({ theme }) => theme.media.XXS}px) {
    font-size: ${({ theme }) => theme.font.fontSize.S}px;
  }
`;
