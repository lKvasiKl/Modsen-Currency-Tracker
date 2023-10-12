import styled from "styled-components";

import {
  displayFlex,
  flexRow,
  fontNormal,
  flexColumn,
  fontNormal150,
  displayNone,
} from "@constants/styles/mixins";

export const FooterConatiner = styled.footer`
  ${displayFlex}
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.media.S}px) {
    padding: 0 ${({ theme }) => theme.space.L}px;
    align-items: unset;
  }
`;

export const FooterWrapper = styled.section`
  ${flexRow}
  gap: ${({ theme }) => theme.space.XL105}px;

  @media (max-width: ${({ theme }) => theme.media.XL}px) {
    gap: ${({ theme }) => theme.space.L35}px;
    flex-direction: column;
  }
`;

export const InfoContainer = styled.div`
  ${flexColumn}
  gap: ${({ theme }) => theme.space.M}px;
  max-width: 482px;
`;

export const Title = styled.div`
  ${displayFlex}
  gap: ${({ theme }) => theme.space.XXS}px;

  @media (max-width: ${({ theme }) => theme.media.XL}px) {
    justify-content: center;
  }
`;

export const Image = styled.img`
  user-select: none;
`;

export const Text = styled.h3`
  ${fontNormal}
  font-size: ${({ theme }) => theme.font.fontSize.M}px;
  font-weight: ${({ theme }) => theme.font.fontWeight.L};
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
  ${fontNormal150}
  color: ${({ theme }) => theme.textColor};
  font-size: ${({ theme }) => theme.font.fontSize.M}px;
  font-weight: ${({ theme }) => theme.font.fontWeight.XS};

  @media (max-width: ${({ theme }) => theme.media.XL}px) {
    text-align: justify;
  }

  @media (max-width: ${({ theme }) => theme.media.S}px) {
    ${displayNone}
  }
`;

export const LinksContainer = styled.div`
  ${displayFlex}
  gap: ${({ theme }) => theme.space.XL79}px;

  @media (max-width: ${({ theme }) => theme.media.S}px) {
    ${displayNone}
  }
`;

export const MobileLinksContainer = styled.div`
  ${flexColumn}

  @media (min-width: ${({ theme }) => theme.media.S + 1}px) {
    ${displayNone}
  }
`;

export const Copyright = styled.p`
  ${fontNormal150}
  color: ${({ theme }) => theme.colors.gray};
  font-family: ${({ theme }) => theme.font.fontFamily.inter};
  font-size: ${({ theme }) => theme.font.fontSize.M}px;
  font-weight: ${({ theme }) => theme.font.fontWeight.S};
  padding-top: ${({ theme }) => theme.space.XL55}px;
  padding-bottom: ${({ theme }) => theme.space.L40}px;
  user-select: none;

  @media (max-width: ${({ theme }) => theme.media.S}px) {
    font-size: ${({ theme }) => theme.font.fontSize.S}px;
    text-align: center;
  }
`;
