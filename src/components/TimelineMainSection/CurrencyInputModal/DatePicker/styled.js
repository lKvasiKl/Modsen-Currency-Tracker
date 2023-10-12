import styled from "styled-components";

import { COLORS } from "@constants/styles/colors";
import { displayFlex } from "@constants/styles/mixins";

export const DateContainer = styled.div`
  ${displayFlex}
  gap: ${({ theme }) => theme.space.XS}px;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  color: ${COLORS.white};
  background-color: transparent;
  cursor: pointer;
  height: 25px;
  width: 25px;
  border: none;
  border-radius: 25px;
  font-weight: bold;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkGray};
  }
`;

export const DateTitle = styled.p`
  color: ${COLORS.white};
  font-size: ${({ theme }) => theme.font.fontSize.M}px;
  margin: ${({ theme }) => theme.space.XXS}px 0;
`;
