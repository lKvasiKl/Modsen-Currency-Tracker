import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 520px;
  height: fit-contnet;
  padding: 30px 100px 30px 32px;
  align-items: center;
  gap: 30px;
  border-radius: 8px;
  border: 1px solid #474747;
  background-color: #202025;
  margin-bottom: 56px;
  transition: ${({ onClick }) => (onClick ? "transform 0.5s" : "none")};

  &:hover {
    transform: ${({ onClick }) => (onClick ? "scale(1.03)" : "none")};
    cursor: ${({ onClick }) => (onClick ? "pointer" : "arrow")};
    box-shadow: ${({ onClick }) =>
      onClick ? "0px 0px 25px 4px #84dd3770" : ""};
  }

  @media (max-width: 1200px) {
    max-width: unset;
    padding: 0 0 0 30px;
  }

  @media (max-width: 500px) {
    height: 100px;
  }
`;

export const Image = styled.img`
  user-select: none;

  @media (max-width: 500px) {
    width: 50px;
    height: 50px;
  }
`;

export const CardContent = styled.div`
  display: block;
`;

export const CardTitle = styled.p`
  color: #d9d9d9;
  font-family: Poppins;
  font-size: 29px;
  font-style: normal;
  font-weight: 400;
  line-height: 49.371px;
  background-color: transparent;

  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

export const CurrencyRate = styled.span`
  color: #a7b2c3;
  font-family: Poppins;
  font-size: 32px;
  font-style: normal;
  font-weight: 300;
  line-height: 41.143px;
  background-color: transparent;

  @media (max-width: 500px) {
    font-size: 25px;
  }
`;
