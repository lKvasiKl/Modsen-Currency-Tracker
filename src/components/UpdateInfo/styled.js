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
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 57px 0;
  gap: 18px;
`;

export const Image = styled.img`
  user-select: none;
  animation: ${pulseAnimation} 2s ease-in-out infinite;

  @media (max-width: 500px) {
    width: 35px;
    height: 35px;
  }
`;

export const Text = styled.p`
  color: #d9d9d9;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-style: normal;
  font-weight: 300;
  line-height: 41.143px;

  @media (max-width: 500px) {fontSize
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;
