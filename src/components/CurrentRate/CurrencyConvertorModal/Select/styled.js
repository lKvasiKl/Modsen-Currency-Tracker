import styled from "styled-components";

import { displayFlex } from "@constants/styles/mixins";

export const SelectButton = styled.button`
  ${displayFlex}
  padding: ${({ theme }) => theme.space.XXS}px ${({ theme }) =>
    theme.space.S}px;
  color: ${({ theme }) => theme.textColor};
  font-size: ${({ theme }) => theme.font.fontSize.S}px;
  cursor: pointer;
  background: transparent;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border: none;

  &:hover {
    background- ${({ theme }) => theme.colors.purpuleBlue};
  }
`;

export const ButtonContentContainer = styled.div`
  ${displayFlex}
  gap: ${({ theme }) => theme.space.S}px;
  align-items: center;
  background: transparent;
`;

export const ArrowIcon = styled.img`
  transition: transform 0.3s;

  transform: ${({ $isOpen }) =>
    $isOpen ? "rotate(180deg)" : "rotate(360deg)"};
`;

export const SelectList = styled.ul`
  position: absolute;
  top: 74%;
  width: inherit;
  left: 35px;
  list-style-type: none;
  height: 183px;
  overflow: auto;

  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.borderGray};
    border-right: 1px solid ${({ theme }) => theme.colors.darkGray};
    border-bottom: 1px solid ${({ theme }) => theme.colors.darkGray};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.darkGray};

    &:hover {
      background-color: ${({ theme }) => theme.colors.purpuleBlue};
    }
  }
`;

export const SelectsItem = styled.li`
  padding: ${({ theme }) => theme.space.XXS}px ${({ theme }) => theme.space.M}px;
  background-color: ${({ theme }) => theme.colors.borderGray};
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkGray};
  border-right: 1px solid ${({ theme }) => theme.colors.darkGray};
  border-left: 1px solid ${({ theme }) => theme.colors.darkGray};
  ${displayFlex}
  gap: ${({ theme }) => theme.space.S}px;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.purpuleBlue};
  }
`;
