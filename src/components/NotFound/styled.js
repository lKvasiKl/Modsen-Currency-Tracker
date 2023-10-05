import styled, { keyframes } from "styled-components";

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
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  a {
    color: ${({ theme }) => theme.colors.lightGreen};
    text-decoration: none;
    border: 1px solid ${({ theme }) => theme.colors.darkGreen};
    font-size: ${({ theme }) => theme.fontSize.xs};
    font-weight: 200;
    padding: 12px 24px;
    border-radius: 15px;
    box-shadow: 0px 7px 0px -2px ${({ theme }) => theme.colors.darkGreen};
    transition: all 0.3s ease-in-out;
    margin-top: 15px;

    &:hover {
      box-shadow: none;
      background-color: ${({ theme }) => theme.colors.darkGreen};
      color: ${({ theme }) => theme.textColor};
    }
  }
`;

export const EyesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2px;
`;

export const Eye = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(
    35deg,
    ${({ theme }) => theme.colors.darkGreen} 0.18%,
    ${({ theme }) => theme.colors.yellow} 49.3%,
    ${({ theme }) => theme.colors.lightGreen} 99.88%
  );
  border-radius: 50%;
  display: grid;
  place-items: center;
`;

export const Pupil = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${({ theme }) => theme.backgroundColor};
  border-radius: 50%;
  animation: ${movePupil} 2s infinite ease-in-out;
  transform-origin: center center;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 500;
  text-align: center;
  background: linear-gradient(
    90deg,
    #00ce2c 0.18%,
    ${({ theme }) => theme.colors.yellow} 49.3%,
    ${({ theme }) => theme.colors.lightGreen} 99.88%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Description = styled.p`
  margin-top: 10px;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 200;
  color: ${({ theme }) => theme.colors.red};
`;
