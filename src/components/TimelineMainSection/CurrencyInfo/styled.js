import styled from "styled-components";

export const CurrencyContainer = styled.div`
  ${({ theme }) => theme.display.flex};
  width: 100%;
  max-width: 520px;
  align-items: center;
  gap: ${({ theme }) => theme.space.twentyFive}px;
  margin-bottom: ${({ theme }) => theme.space.fifty}px;
  border: none;
  cursor: ${(props) => (!props.$isChartCanBuild ? "pointer" : "arrow")};
  padding: ${({ theme }) => theme.space.thirty}px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.darkGray};
  background-color: ${({ theme }) => theme.colors.borderGray};
  transition: transform 0.5s;

  &:hover {
    transform: ${(props) => (!props.$isChartCanBuild ? "scale(1.03)" : "none")};
    box-shadow: ${(props) =>
      !props.$isChartCanBuild ? "0px 0px 25px 4px #84dd3770" : "none"};
  }

  @media (max-width: ${({ theme }) => theme.media.XXS}px) {
    height: 100px;
  }
`;

export const Image = styled.img`
  user-select: none;

  @media (max-width: ${({ theme }) => theme.media.XXS}px) {
    width: 50px;
    height: 50px;
  }
`;

export const TextContainer = styled.div`
  ${({ theme }) => theme.display.flexColumn};
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.cardLightGray};
  font-size: ${({ theme }) => theme.font.fontSize.L}px;
  font-style: normal;
  font-weight: ${({ theme }) => theme.font.fontWeight.S};
  line-height: 49.371px;

  @media (max-width: ${({ theme }) => theme.media.XS}px) {
    font-size: ${({ theme }) => theme.font.fontSize.M}px;
  }

  @media (max-width: ${({ theme }) => theme.media.XXS}px) {
    line-height: normal;
  }
`;

export const Description = styled.span`
  color: ${({ theme }) => theme.colors.cardLightGray};
  font-size: ${({ theme }) => theme.font.fontSize.XS}px;
  font-style: normal;
  font-weight: ${({ theme }) => theme.font.fontWeight.XS};
  line-height: 49.371px;
  text-align: left;

  @media (max-width: ${({ theme }) => theme.media.XXS}px) {
    line-height: normal;
  }
`;
