import styled from "styled-components";

export const SelectButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 20px;
  background: transparent;
  border: none;
  color: #ffffff;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    background-color: #303036;
  }
`;

export const ButtonContentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  background: transparent;
`;

export const ArrowIcon = styled.img`
  background-color: transparent;
  transition: transform 0.3s;

  transform: ${({ open }) => (open ? "rotate(180deg)" : "rotate(360deg)")};
`;

export const SelectList = styled.ul`
  position: absolute;
  top: 66.1%;
  width: 287px;
  left: 35px;
  list-style-type: none;
  height: 183px;
  overflow: auto;

  display: ${({ open }) => (open ? "block" : "none")};

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: #202025;
    border-right: 1px solid #474747;
    border-bottom: 1px solid #474747;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #474747;

    &:hover {
      background-color: #303036;
    }
  }
`;

export const SelectsItem = styled.li`
  padding: 10px 25px;
  background-color: #202025;
  border-bottom: 1px solid #474747;
  border-right: 1px solid #474747;
  border-left: 1px solid #474747;
  cursor: pointer;
  display: flex;
  gap: 20px;
  align-items: center;

  &:hover {
    background-color: #303036;
  }
`;
