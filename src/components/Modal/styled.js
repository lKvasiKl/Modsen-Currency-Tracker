import styled, { css } from "styled-components";

import { displayFlex, flexColumn } from "@constants/styles/mixins";

const prodigalGreenColor = ({ theme }) => theme.colors.prodigalGreen;
const darkGrayColor = ({ theme }) => theme.colors.darkGray;
const borderGrayColor = ({ theme }) => theme.colors.borderGray;
const spaceXXS = ({ theme }) => theme.space.XXS;

const CommonStyles = css`
  color: ${({ theme }) => theme.textColor};
`;

export const ModalContainer = styled.div`
  ${CommonStyles}
  ${displayFlex}
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
`;

export const ModalWindow = styled.div`
  ${CommonStyles}
  ${flexColumn}
  background-color: ${borderGrayColor};
  border: 1px solid ${darkGrayColor};
  padding: ${spaceXXS}px;
  box-shadow: 0px 0px 13px 0px ${prodigalGreenColor};
  width: fit-content;
  height: fit-content;
  position: relative;
  border-radius: 10px;
`;

export const CloseButton = styled.button`
  background: transparent;
  align-self: flex-end;
  cursor: pointer;
  height: 25px;
  width: 25px;
  border: none;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.15);
  }
`;

export const Image = styled.img`
  user-select: none;
`;
