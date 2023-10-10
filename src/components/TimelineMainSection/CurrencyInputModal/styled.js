import styled from "styled-components";

import { COLORS } from "@constants/styles/colors";

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.darkGreen};
  color: ${COLORS.white};
  height: 50px;
  margin: ${({ theme }) => theme.space.twenty}px;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  font-size: ${({ theme }) => theme.font.fontSize.S}px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.yellow};
  }
`;

export const Text = styled.p`
  margin-bottom: ${({ theme }) => theme.space.ten}px;
  align-self: center;
  width: 250px;
  text-align: center;
  color: ${COLORS.white};
`;

export const Error = styled(Text)`
  color: ${({ theme }) => theme.colors.red};
`;
