import styled from "styled-components";

export const CardContainer = styled.div`
  ${({ theme }) => theme.display.flex};
  width: 100%;
  max-width: 520px;
  height: fit-content;
  padding: ${({ theme }) => theme.space.thirty}px;
  align-items: center;
  gap: ${({ theme }) => theme.space.thirty}px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.darkGray};
  background-color: ${({ theme }) => theme.colors.borderGray};
  margin-bottom: ${({ theme }) => theme.space.fiftySix}px;
  transition: ${({ onClick }) => (onClick ? "transform 0.5s" : "none")};

  &:hover {
    transform: ${({ onClick }) => (onClick ? "scale(1.03)" : "none")};
    cursor: ${({ onClick }) => (onClick ? "pointer" : "arrow")};
    box-shadow: ${({ onClick }) =>
      onClick ? "0px 0px 25px 4px #84dd3770" : ""};
  }

  @media (max-width: ${({ theme }) => theme.media.XL}px) {
    max-width: unset;
  }

  @media (max-width: ${({ theme }) => theme.media.XXS}px) {
    height: 100px;
    padding-right: ${({ theme }) => theme.space.thirty}px;
  }
`;

export const Image = styled.img`
  user-select: none;

  @media (max-width: ${({ theme }) => theme.media.XXS}px) {
    width: 50px;
    height: 50px;
  }
`;

export const CardContent = styled.div`
  ${({ theme }) => theme.display.block};
`;

export const CardTitle = styled.p`
  color: ${({ theme }) => theme.colors.cardLightGray};
  font-size: ${({ theme }) => theme.font.fontSize.L}px;
  font-style: normal;
  font-weight: ${({ theme }) => theme.font.fontWeight.S};
  line-height: 49.371px;

  @media (max-width: ${({ theme }) => theme.media.XXS}px) {
    font-size: ${({ theme }) => theme.font.fontSize.S}px;
    line-height: normal;
  }
`;

export const CurrencyRate = styled.span`
  color: ${({ theme }) => theme.colors.lightBlue};
  font-size: ${({ theme }) => theme.font.fontSize.L}px;
  font-style: normal;
  font-weight: ${({ theme }) => theme.font.fontWeight.XS};
  line-height: 41.143px;

  @media (max-width: ${({ theme }) => theme.media.XXS}px) {
    font-size: ${({ theme }) => theme.font.fontSize.M}px;
    line-height: normal;
  }
`;
