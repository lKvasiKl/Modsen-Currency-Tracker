import styled from "styled-components";

import { COLORS } from "@constants/styles/colors";

export const DateContainer = styled.div`
  ${({ theme }) => theme.display.flex};
  align-items: center;
  gap: ${({ theme }) => theme.space.fifteen}px;
  justify-content: center;
`;

export const Button = styled.button`
  background-color: transparent;
  cursor: pointer;
  color: ${COLORS.white};
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
  font-size: ${({ theme }) => theme.font.fontSize.M}px;
  color: ${COLORS.white}
  margin: ${({ theme }) => theme.space.ten}px 0;
`;
