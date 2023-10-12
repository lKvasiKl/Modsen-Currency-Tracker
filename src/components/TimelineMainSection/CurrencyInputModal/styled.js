import styled from "styled-components";

import { COLORS } from "@constants/styles/colors";

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.darkGreen};
  color: ${COLORS.white};
  margin: ${({ theme }) => theme.space.S}px;
  font-size: ${({ theme }) => theme.font.fontSize.S}px;
  border-radius: 25px;
  border: none;
  height: 50px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.yellow};
  }
`;

export const Text = styled.p`
  margin-bottom: ${({ theme }) => theme.space.XXS}px;
  color: ${COLORS.white};
  align-self: center;
  width: 250px;
  text-align: center;
`;

export const Error = styled(Text)`
  color: ${({ theme }) => theme.colors.red};
`;
