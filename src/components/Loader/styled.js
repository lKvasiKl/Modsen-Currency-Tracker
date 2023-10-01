import styled, { keyframes } from "styled-components";

const animate = keyframes`
  0%, 100% {
    transform: scale(0.2);
    background-color: ${({ theme }) => theme.colors.darkGreen};
  }
  40% {
    transform: scale(1);
    background-color: ${({ theme }) => theme.colors.yellow};
  }
  50% {
    transform: scale(1);
    background-color: ${({ theme }) => theme.colors.lightGreen};
  }
`;

export const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundColor};

  .loader {
    div {
      height: 20px;
      width: 20px;
      border-radius: 50%;
      transform: scale(0);
      animation: ${animate} 1.5s ease-in-out infinite;
      display: inline-block;
      margin: 0.5rem;

      &:nth-child(1) {
        animation-delay: 0s;
      }
      &:nth-child(2) {
        animation-delay: 0.2s;
      }
      &:nth-child(3) {
        animation-delay: 0.4s;
      }
      &:nth-child(4) {
        animation-delay: 0.6s;
      }
      &:nth-child(5) {
        animation-delay: 0.8s;
      }
      &:nth-child(6) {
        animation-delay: 1s;
      }
      &:nth-child(7) {
        animation-delay: 1.2s;
      }
    }
  }
`;
