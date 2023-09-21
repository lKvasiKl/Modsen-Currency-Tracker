import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background: transparent;
  color: #ffffff;
  padding-top: 10px;
`;

export const Label = styled.label`
  background: transparent;
  font-size: 20px;
`;

export const InputContainer = styled.div`
  background: transparent;
  color: #ffffff;
  height: 35px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #474747;
  align-items: center;
  margin-bottom: 15px;
`;

export const Input = styled.input`
  background: transparent;
  color: #ffffff;
  background: transparent;
  font-size: 20px;
  height: 30px;
  border: none;
  outline: none;
`;

export const Button = styled.button`
  background: transparent;
  color: #ffffff;
  height: 50px;
  margin: 20px 0;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  font-size: 20px;
  background-color: #00ce2c;

  &:hover {
    background-color: #aedf23;
  }
`;
