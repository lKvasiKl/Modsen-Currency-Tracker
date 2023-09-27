import styled from "styled-components";

export const Label = styled.label`
  padding-left: 25px;
  background: transparent;
  color: #ffffff;
`;

export const InputContainer = styled.div`
  background: transparent;
  color: #ffffff;
  display: flex;
  height: 50px;
  border-bottom: 1px solid #474747;
  align-items: center;
  margin: 0 25px 15px 25px;
`;

export const Input = styled.input`
  background: transparent;
  font-size: 20px;
  height: 50px;
  color: #ffffff;
  border: none;
  outline: none;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: textfield;
    appearance: none;
    margin: 0;
  }
`;
