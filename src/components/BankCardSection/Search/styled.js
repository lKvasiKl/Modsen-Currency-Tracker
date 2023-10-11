import styled from "styled-components";

export const SearchWrapper = styled.div`
  position: relative;
  max-width: 450px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.media.XXS}px) {
    max-width: 350px;
  }
`;

export const SearchContainer = styled.div`
  ${({ theme }) => theme.display.flexRow};
  height: 65px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  margin-top: ${({ theme }) => theme.space.twentyFive}px;
  margin-bottom: ${({ theme }) => theme.space.eighty}px;
  gap: ${({ theme }) => theme.space.twenty}px;
`;

export const Input = styled.input`
  height: 65px;
  width: 100%;
  padding-left: ${({ theme }) => theme.space.twenty}px;
  font-size: ${({ theme }) => theme.font.fontSize.XS}px;
  font-style: normal;
  font-weight: ${({ theme }) => theme.font.fontWeight.S};
  color: ${({ theme }) => theme.colors.lightGray};
  background-color: transparent;
  outline: none;
  border: none;
`;

export const Image = styled.img`
  user-select: none;
  margin-right: ${({ theme }) => theme.space.twenty}px;
  align-self: center;
`;

export const SearchList = styled.ul`
  width: 100%;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translateX(-50%);
  list-style: none;
  overflow-y: auto;
  border: 1px solid ${({ theme }) => theme.colors.darkGray};
  border-radius: 5px;
  z-index: 1;

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

export const SearchListItem = styled.li`
  padding: ${({ theme }) => theme.space.ten}px
    ${({ theme }) => theme.space.twentyFive}px;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkGray};
  cursor: pointer;
  ${({ theme }) => theme.display.flex};
  gap: ${({ theme }) => theme.space.twenty}px;
  align-items: center;
  color: ${({ theme }) => theme.colors.lightGray};

  &:hover {
    background-color: ${({ theme }) => theme.colors.purpuleBlue};
  }
`;
