import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 520px;
  height: 153px;
  padding: 30px 100px 30px 32px;
  align-items: center;
  gap: 30px;
  border-radius: 8px;
  border: 1px solid #474747;
  background-color: #202025;
  margin-bottom: 56px;
`;

export const Image = styled.img`
  background-color: transparent;
`;

export const CardContent = styled.div`
  display: block;
  background-color: transparent;
`;

export const CardTitle = styled.p`
  color: #d9d9d9;
  font-family: Poppins;
  font-size: 29px;
  font-style: normal;
  font-weight: 400;
  line-height: 49.371px;
  background-color: transparent;
`;

export const CurrencyRate = styled.span`
  color: #a7b2c3;
  font-family: Poppins;
  font-size: 32px;
  font-style: normal;
  font-weight: 300;
  line-height: 41.143px;
  background-color: transparent;
`;
