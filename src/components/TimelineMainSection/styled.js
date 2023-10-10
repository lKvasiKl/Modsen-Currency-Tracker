import styled from "styled-components";

export const Main = styled.main`
  ${({ theme }) => theme.display.flexColumn};
  align-items: center;
`;

export const ChartSection = styled.section`
  width: 100%;
  max-width: 1140px;
  margin-bottom: ${({ theme }) => theme.space.fifty}px;
  padding: 0 ${({ theme }) => theme.space.thirty}px;
`;

export const ButtonContainer = styled.div`
  ${({ theme }) => theme.display.flex};
  margin-bottom: ${({ theme }) => theme.space.fifty}px;

  @media (max-width: ${({ theme }) => theme.media.XXS}px) {
    flex-direction: column;
  }
`;

export const Button = styled.button`
  width: 100%;
  max-width: 230px;
  background-color: ${({ theme }) => theme.colors.darkGreen};
  color: ${({ theme }) => theme.textColor};
  height: 50px;
  margin: ${({ theme }) => theme.space.twenty}px;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  font-size: ${({ theme }) => theme.font.fontSize.S}px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.yellow};
  }

  @media (max-width: ${({ theme }) => theme.media.XXS}px) {
    margin-bottom: ${({ theme }) => theme.space.twenty}px;
  }
`;
