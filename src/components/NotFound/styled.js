import styled, { keyframes } from "styled-components";

import { displayFlex } from "@constants/styles/mixins";

const movePupil = keyframes`
    0%,
    100% {
        transform: translate(0, 0);
    }
    25% {
        transform: translate(-10px, -10px);
    }
    50% {
        transform: translate(10px, 10px);
    }
    75% {
        transform: translate(-10px, 10px);
    }
`;

export const ErrorPage = styled.main`
  ${displayFlex}
  gap: ${({ theme }) => theme.space.XXS}px;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  a {
    color: ${({ theme }) => theme.colors.lightGreen};
    border: 1px solid ${({ theme }) => theme.colors.darkGreen};
    font-size: ${({ theme }) => theme.font.fontSize.XS}px;
    font-weight: ${({ theme }) => theme.font.fontWeight.XXS};
    padding: ${({ theme }) => theme.space.XS12}px;
    ${({ theme }) => theme.space.S24}px;
    box-shadow: 0px 7px 0px -2px ${({ theme }) => theme.colors.darkGreen};
    margin-top: ${({ theme }) => theme.space.XS}px;
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    border-radius: 15px;

    &:hover {
      box-shadow: none;
      background-color: ${({ theme }) => theme.colors.darkGreen};
      color: ${({ theme }) => theme.textColor};
    }
  }
`;

export const EyesContainer = styled.div`
  ${displayFlex}
  gap: ${({ theme }) => theme.space.XXS2}px;
  justify-content: center;
`;

export const Eye = styled.div`
  background: linear-gradient(
    35deg,
    ${({ theme }) => theme.colors.darkGreen} 0.18%,
    ${({ theme }) => theme.colors.yellow} 49.3%,
    ${({ theme }) => theme.colors.lightGreen} 99.88%
  );
  border-radius: 50%;
  display: grid;
  width: 80px;
  height: 80px;
  place-items: center;
`;

export const Pupil = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
  animation: ${movePupil} 2s infinite ease-in-out;
  width: 30px;
  border-radius: 50%;
  height: 30px;
  transform-origin: center;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.font.fontSize.XL}px;
  font-weight: ${({ theme }) => theme.font.fontWeight.M};
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.green} 0.18%,
    ${({ theme }) => theme.colors.yellow} 49.3%,
    ${({ theme }) => theme.colors.lightGreen} 99.88%
  );
  text-align: center;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Description = styled.p`
  margin-top: ${({ theme }) => theme.space.XXS}px;
  font-size: ${({ theme }) => theme.font.fontSize.L}px;
  font-weight: ${({ theme }) => theme.font.fontWeight.XXS};
  color: ${({ theme }) => theme.colors.red};
`;
