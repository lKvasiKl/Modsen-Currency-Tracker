import styled, { keyframes } from "styled-components";

import { COLORS } from "@constants/styles/colors";
import { displayFlex, displayInlineBlock } from "@constants/styles/mixins";

const animate = keyframes`
  0%, 100% {
    transform: scale(0.2);
    background-color: ${COLORS.darkGreen};
  }
  40% {
    transform: scale(1);
    background-color: ${COLORS.yellow};
  }
  50% {
    transform: scale(1);
    background-color: ${COLORS.lightGreen};
  }
`;

const backgroundColor = ({ theme }) => theme.backgroundColor;
const spaceXXS8 = ({ theme }) => theme.space.XXS8;

export const LoaderContainer = styled.div`
  ${displayFlex}
  background-color: ${backgroundColor};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

  .loader {
    div {
      ${displayInlineBlock}
      animation: ${animate} 1.5s ease-in-out infinite;
      margin: ${spaceXXS8}px;
      height: 20px;
      width: 20px;
      border-radius: 50%;
      transform: scale(0);

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
