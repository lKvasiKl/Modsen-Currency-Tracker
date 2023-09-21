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
    background-color: transparent;
    color: #a3dc00;
    text-decoration: none;
    border: 1px solid #00ce2c;
    font-size: 16px;
    font-weight: 200;
    padding: 12px 24px;
    border-radius: 15px;
    box-shadow: 0px 7px 0px -2px #00ce2c;
    transition: all 0.3s ease-in-out;
    margin-top: 15px;

    &:hover {
      box-shadow: none;
      background-color: #00ce2c;
      color: #ffffff;
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
    #00ce2c 0.18%,
    #aedf23 49.3%,
    #a3dc00 99.88%
  );
  border-radius: 50%;
  display: grid;
  place-items: center;
`;

export const Pupil = styled.div`
  width: 30px;
  height: 30px;
  background-color: #000000;
  border-radius: 50%;
  animation: ${movePupil} 2s infinite ease-in-out;
  transform-origin: center center;
`;

export const Title = styled.h1`
  font-size: 50px;
  font-weight: 500;
  text-align: center;
  background: linear-gradient(
    90deg,
    #00ce2c 0.18%,
    #aedf23 49.3%,
    #a3dc00 99.88%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Description = styled.p`
  margin-top: 10px;
  font-size: 30px;
  font-weight: 200;
  color: #d10708;
`;
