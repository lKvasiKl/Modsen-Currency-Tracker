import styled from "styled-components";

import { displayFlex, flexColumn } from "@constants/styles/mixins";

export const Main = styled.main`
  ${flexColumn}
  align-items: center;
`;

export const ChartSection = styled.section`
  margin-bottom: ${({ theme }) => theme.space.XL}px;
  padding: 0 ${({ theme }) => theme.space.L}px;
  width: 100%;
  max-width: 1140px;
`;

export const ButtonContainer = styled.div`
  ${displayFlex}
  margin-bottom: ${({ theme }) => theme.space.XL}px;

  @media (max-width: ${({ theme }) => theme.media.XXS}px) {
    flex-direction: column;
  }
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.darkGreen};
  color: ${({ theme }) => theme.textColor};
  margin: ${({ theme }) => theme.space.S}px;
  font-size: ${({ theme }) => theme.font.fontSize.S}px;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  height: 50px;
  width: 100%;
  max-width: 230px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.yellow};
  }

  @media (max-width: ${({ theme }) => theme.media.XXS}px) {
    margin-bottom: ${({ theme }) => theme.space.S}px;
  }
`;
