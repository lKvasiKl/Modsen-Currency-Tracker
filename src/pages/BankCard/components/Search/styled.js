import styled from "styled-components";

export const SearchWrapper = styled.div`
  position: relative;
  max-width: 450px;
  width: 100%;

  @media (max-width: 500px) {
    max-width: 350px;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 65px;
  border-radius: 5px;
  background-color: #1b2028;
  margin: 25px 0 80px 0;
  gap: 20px;
`;

export const Input = styled.input`
  height: 65px;
  width: 100%;
  padding-left: 20px;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-style: normal;
  font-weight: 400;
  color: #9e9e9e;
  background-color: transparent;
  outline: none;
  border: none;
`;

export const Image = styled.img`
  margin-right: 20px;
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
      background-color: #303036;
    }
  }
`;

export const SearchListItem = styled.li`
  padding: 10px 25px;
  background-color: #1b2028;
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkGray};
  cursor: pointer;
  display: flex;
  gap: 20px;
  align-items: center;
  color: #9e9e9e;

  &:hover {
    background-color: #303036;
  }
`;
