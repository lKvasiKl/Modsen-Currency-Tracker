import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 520px;
  height: fit-content;
  padding: 30px;
  align-items: center;
  gap: 30px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.darkGray};
  background-color: ${({ theme }) => theme.colors.borderGray};
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
  }

  @media (max-width: 500px) {
    height: 100px;
    padding: 0 0 0 30px;
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
  font-size: ${({ theme }) => theme.fontSize.l};
  font-style: normal;
  font-weight: 400;
  line-height: 49.371px;

  @media (max-width: 500px) {
    font-size: ${({ theme }) => theme.fontSize.s};
    line-height: normal;
  }
`;

export const CurrencyRate = styled.span`
  color: #a7b2c3;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-style: normal;
  font-weight: 300;
  line-height: 41.143px;

  @media (max-width: 500px) {
    font-size: ${({ theme }) => theme.fontSize.m};
    line-height: normal;
  }
`;
