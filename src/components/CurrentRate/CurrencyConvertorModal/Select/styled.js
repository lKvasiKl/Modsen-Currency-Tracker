import styled from "styled-components";

export const SelectButton = styled.button`
  ${({ theme }) => theme.display.flex};
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: ${({ theme }) => theme.space.ten}px ${({ theme }) =>
    theme.space.twenty}px;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.textColor};
  font-size: ${({ theme }) => theme.font.fontSize.S}px;
  cursor: pointer;

  &:hover {
    background- ${({ theme }) => theme.colors.purpuleBlue};
  }
`;

export const ButtonContentContainer = styled.div`
  ${({ theme }) => theme.display.flex};
  align-items: center;
  gap: ${({ theme }) => theme.space.twenty}px;
  background: transparent;
`;

export const ArrowIcon = styled.img`
  transition: transform 0.3s;

  transform: ${(props) =>
    props.$isOpen ? "rotate(180deg)" : "rotate(360deg)"};
`;

export const SelectList = styled.ul`
  position: absolute;
  top: 66.1%;
  width: 252px;
  left: 35px;
  list-style-type: none;
  height: 183px;
  overflow: auto;

  display: ${(props) => (props.$isOpen ? "block" : "none")};

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
  padding: ${({ theme }) => theme.space.ten}px
    ${({ theme }) => theme.space.twentyFive}px;
  background-color: ${({ theme }) => theme.colors.borderGray};
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkGray};
  border-right: 1px solid ${({ theme }) => theme.colors.darkGray};
  border-left: 1px solid ${({ theme }) => theme.colors.darkGray};
  cursor: pointer;
  ${({ theme }) => theme.display.flex};
  gap: ${({ theme }) => theme.space.twenty}px;
  align-items: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.purpuleBlue};
  }
`;
