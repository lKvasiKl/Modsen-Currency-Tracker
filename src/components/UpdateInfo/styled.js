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
`;

export const Text = styled.p`
  color: #d9d9d9;
  font-family: Poppins;
  font-size: 32.914px;
  font-style: normal;
  font-weight: 300;
  line-height: 41.143px;
`;
