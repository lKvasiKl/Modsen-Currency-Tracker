import styled from "styled-components";

export const CurrencyContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 520px;
  align-items: center;
  gap: 25px;
  margin-bottom: 50px;
  border: none;
  cursor: ${(props) => (!props.$isChartCanBuild ? "pointer" : "arrow")};
  padding: 30px;
  border-radius: 8px;
  border: 1px solid #474747;
  background-color: #202025;
  transition: transform 0.5s;

  &:hover {
    transform: ${(props) => (!props.$isChartCanBuild ? "scale(1.03)" : "none")};
    box-shadow: ${(props) =>
      !props.$isChartCanBuild ? "0px 0px 25px 4px #84dd3770" : "none"};
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

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.p`
  color: #d9d9d9;
  font-size: 35px;
  font-style: normal;
  font-weight: 400;
  line-height: 49.371px;

  @media (max-width: 600px) {
    font-size: 25px;
  }

  @media (max-width: 500px) {
    line-height: normal;
  }
`;

export const Description = styled.span`
  color: #d9d9d9;
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: 49.371px;
  background-color: transparent;
  text-align: left;

  @media (max-width: 500px) {
    line-height: normal;
  }
`;
