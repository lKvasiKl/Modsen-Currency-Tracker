import styled from "styled-components";

export const ErrorBoundaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: Poppins;
  font-weight: bolder;
  gap: 10px;

  a {
    color: #84dd37;
  }
`;

export const ErrorTitle = styled.h1`
  background: linear-gradient(
    90deg,
    #00ce2c 0.18%,
    #aedf23 49.3%,
    #a3dc00 99.88%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Error = styled.p`
  color: #d10708;
  max-width: 800px;
  word-wrap: break-word;
`;

export const Text = styled.p`
  color: #84dd37;
  font-size: 30px;
`;
