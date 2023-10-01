import styled, { css } from "styled-components";

const CommonStyles = css`
  color: ${({ theme }) => theme.textColor};
`;

export const ModalContainer = styled.div`
  ${CommonStyles}
  height: 100vh;
  width: 100vw;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
`;

export const ModalWindow = styled.div`
  ${CommonStyles}
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: fit-content;
  position: relative;
  background-color: ${({ theme }) => theme.colors.borderGray};
  border: 1px solid ${({ theme }) => theme.colors.darkGray};
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0px 0px 13px 0px #d9e7da33;
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

export const Image = styled.img``;
