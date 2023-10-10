import styled from "styled-components";

export const FooterConatiner = styled.footer`
  ${({ theme }) => theme.display.flex};
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.media.S}px) {
    align-items: unset;
    padding: 0 ${({ theme }) => theme.space.thirty}px;
  }
`;

export const FooterWrapper = styled.section`
  ${({ theme }) => theme.display.flexRow};
  gap: ${({ theme }) => theme.space.oneHundredFive}px;

  @media (max-width: ${({ theme }) => theme.media.XL}px) {
    flex-direction: column;
    gap: ${({ theme }) => theme.space.thirtyFive}px;
  }
`;

export const InfoContainer = styled.div`
  ${({ theme }) => theme.display.flexColumn};
  max-width: 482px;
  gap: ${({ theme }) => theme.space.twentyFive}px;
`;

export const Title = styled.div`
  ${({ theme }) => theme.display.flex};
  gap: ${({ theme }) => theme.space.ten}px;

  @media (max-width: ${({ theme }) => theme.media.XL}px) {
    justify-content: center;
  }
`;

export const Image = styled.img`
  user-select: none;
`;

export const Text = styled.h3`
  font-size: ${({ theme }) => theme.font.fontSize.M}px;
  font-weight: ${({ theme }) => theme.font.fontWeight.L};
  ${({ theme }) => theme.font.fontNormal};
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.darkGreen} 0.18%,
    ${({ theme }) => theme.colors.yellow} 49.3%,
    ${({ theme }) => theme.colors.lightGreen} 99.88%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Quote = styled.p`
  color: ${({ theme }) => theme.textColor};
  font-size: ${({ theme }) => theme.font.fontSize.M}px;
  font-style: normal;
  font-weight: ${({ theme }) => theme.font.fontWeight.XS};
  line-height: 150%;

  @media (max-width: ${({ theme }) => theme.media.XL}px) {
    text-align: justify;
  }

  @media (max-width: ${({ theme }) => theme.media.S}px) {
    ${({ theme }) => theme.display.none};
  }
`;

export const LinksContainer = styled.div`
  ${({ theme }) => theme.display.flex};
  gap: ${({ theme }) => theme.space.seventyNine}px;

  @media (max-width: ${({ theme }) => theme.media.S}px) {
    ${({ theme }) => theme.display.none};
  }
`;

export const MobileLinksContainer = styled.div`
  ${({ theme }) => theme.display.flexColumn};

  @media (min-width: ${({ theme }) => theme.media.S + 1}px) {
    ${({ theme }) => theme.display.none};
  }
`;

export const Copyright = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-family: ${({ theme }) => theme.font.fontFamily.inter};
  font-size: ${({ theme }) => theme.font.fontSize.M}px;
  font-style: normal;
  font-weight: ${({ theme }) => theme.font.fontWeight.S};
  line-height: 150%;
  padding-top: ${({ theme }) => theme.space.fiftyFive}px;
  padding-bottom: ${({ theme }) => theme.space.fourty}px;
  user-select: none;

  @media (max-width: ${({ theme }) => theme.media.S}px) {
    text-align: center;
    font-size: ${({ theme }) => theme.font.fontSize.S}px;
`;
