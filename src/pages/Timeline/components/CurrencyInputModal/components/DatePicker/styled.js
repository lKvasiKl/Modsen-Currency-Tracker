import styled from "styled-components";

export const DateContainer = styled.div`
  display: flex;
  background-color: transparent;
  align-items: center;
  gap: 15px;
  justify-content: center;
`;

export const Button = styled.button`
  background-color: transparent;
  cursor: pointer;
  color: #ffffff;
  height: 25px;
  width: 25px;
  border: none;
  border-radius: 25px;
  font-weight: bold;

  &:hover {
    background-color: #474747;
  }
`;

export const DateTitle = styled.p`
  font-size: 26px;
  background-color: transparent;
  margin: 10px 0;
`;
