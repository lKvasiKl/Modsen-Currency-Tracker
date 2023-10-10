import styled, { keyframes } from "styled-components";

const pulseAnimation = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
`;

export const UpdateInfoContainer = styled.section`
  ${({ theme }) => theme.display.flex};
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.space.fiftySix}px
    ${({ theme }) => theme.space.ten}px;
  gap: ${({ theme }) => theme.space.eighteen}px;
`;

export const Image = styled.img`
  user-select: none;
  animation: ${pulseAnimation} 2s ease-in-out infinite;

  @media (max-width: ${({ theme }) => theme.media.XXS}px) {
    width: 35px;
    height: 35px;
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.cardLightGray};
  font-size: ${({ theme }) => theme.font.fontSize.L}px;
  font-style: normal;
  font-weight: ${({ theme }) => theme.font.fontWeight.XS};
  line-height: 41.143px;

  @media (max-width: ${({ theme }) => theme.media.XXS}px) {
    font-size: ${({ theme }) => theme.font.fontSize.S}px;
  }
`;
