import styled from "styled-components";

export const StyledHeader = styled.header`
  ${({ theme }) => theme.display.flex};
  justify-content: center;
  padding-top: ${({ theme }) => theme.space.thirtyThree}px;
  padding-right: ${({ theme }) => theme.space.threeHundredTen}px;
  padding-bottom: ${({ theme }) => theme.space.fiftyEight}px;
  background: linear-gradient(253deg, #121212 11.77%, #2479408a 91.12%);

  @media (max-width: ${({ theme }) => theme.media.XL}px) {
    padding-right: ${({ theme }) => theme.space.zero};
  }
`;

export const SectionContainer = styled.section`
  ${({ theme }) => theme.display.flex};
  align-items: center;
`;

export const TextContainer = styled.div`
  ${({ theme }) => theme.display.flexColumn};
  align-items: flex-end;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.media.XL}px) {
    align-items: center;
  }
`;

export const Title = styled.h1`
  flex-shrink: 0;
  text-align: right;
  max-width: 760px;
  font-size: ${({ theme }) => theme.font.fontSize.XXL}px;
  font-weight: ${({ theme }) => theme.font.fontWeight.L};
  ${({ theme }) => theme.font.fontNormal};
  padding-right: ${({ theme }) => theme.space.seventy}px;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.darkGreen} 0.18%,
    ${({ theme }) => theme.colors.yellow} 49.3%,
    ${({ theme }) => theme.colors.lightGreen} 99.88%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: ${({ theme }) => theme.media.XL}px) {
    padding: ${({ theme }) => theme.space.zero};
    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.media.M}px) {
    font-size: ${({ theme }) => theme.font.fontSize.XL}px;
  }

  @media (max-width: ${({ theme }) => theme.media.XXS}px) {
    font-size: ${({ theme }) => theme.font.fontSize.L}px;
  }
`;

export const Quote = styled.p`
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.cardLightGray};
  text-align: center;
  font-size: ${({ theme }) => theme.font.fontSize.M}px;
  max-width: 400px;
  font-style: normal;
  font-weight: ${({ theme }) => theme.font.fontWeight.XS};
  line-height: 46.772px;

  @media (max-width: ${({ theme }) => theme.media.XXS}px) {
    font-size: ${({ theme }) => theme.font.fontSize.S}px;
  }
`;

export const Logotype = styled.img`
  flex-shrink: 0;
  user-select: none;

  @media (max-width: ${({ theme }) => theme.media.XL}px) {
    ${({ theme }) => theme.display.none};
  }
`;
