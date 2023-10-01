import styled from "styled-components";

export const BurgerMenuContainer = styled.div`
  width: 30px;
  height: 30px;
  position: relative;
  cursor: pointer;

  @media (min-width: 651px) {
    display: none;
  }
`;

export const BurgerLine = styled.div`
  width: 30px;
  height: 4px;
  position: absolute;
  background-color: ${({ theme }) => theme.textColor};
  transition: all 0.3s ease-in-out;
  transform-origin: center;
  border-radius: 4px;

  &:nth-of-type(1) {
    top: ${({ $isOpen }) => ($isOpen ? "50%" : "20%")};
    transform: ${({ $isOpen }) => ($isOpen ? "rotate(45deg)" : "rotate(0deg)")};
  }

  &:nth-of-type(2) {
    top: 50%;
    opacity: ${({ $isOpen }) => ($isOpen ? 0 : 1)};
  }

  &:nth-of-type(3) {
    top: ${({ $isOpen }) => ($isOpen ? "50%" : "80%")};
    transform: ${({ $isOpen }) =>
      $isOpen ? "rotate(-45deg)" : "rotate(0deg)"};
  }
`;

export const BurgerMenuItems = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: ${({ theme }) => theme.textColor};
  list-style-type: none;
  z-index: 1;
  transition: all 0.3s ease-in-out;
  height: ${({ $isOpen }) => ($isOpen ? "0" : "auto")};
  overflow: hidden;
  position: absolute;
  width: 100%;
  left: 0;
  top: 10%;
  background-color: ${({ theme }) => theme.backgroundColor};
  padding-bottom: 15px;

  li {
    padding-bottom: 15px;
  }

  a {
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: 300;
    text-decoration: none;
    color: ${({ theme }) => theme.textColor};

    &:hover {
      color: ${({ theme }) => theme.colors.green};
    }

    &.active {
      color: ${({ theme }) => theme.colors.green};
      text-decoration: underline;
      text-underline-offset: 5px;
    }
  }
`;
