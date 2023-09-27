import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ChartSection = styled.section`
  width: 100%;
  max-width: 1140px;
  margin-bottom: 50px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-bottom: 50px;
`;

export const Button = styled.button`
  width: 100%;
  max-width: 230px;
  background-color: #00ce2c;
  color: #ffffff;
  height: 50px;
  margin: 20px;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  font-size: 20px;

  &:hover {
    background-color: #aedf23;
  }
`;
