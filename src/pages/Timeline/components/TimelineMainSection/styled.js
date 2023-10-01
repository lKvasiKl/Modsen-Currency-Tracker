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
  padding: 0 30px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-bottom: 50px;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const Button = styled.button`
  width: 100%;
  max-width: 230px;
  background-color: ${({ theme }) => theme.colors.darkGreen};
  color: ${({ theme }) => theme.textColor};
  height: 50px;
  margin: 20px;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.s};

  &:hover {
    background-color: ${({ theme }) => theme.colors.yellow};
  }

  @media (max-width: 500px) {
    margin: 0 0 20px 0;
  }
`;
