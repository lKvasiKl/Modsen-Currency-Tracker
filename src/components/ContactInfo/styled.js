import styled from "styled-components";

import { displayFlex, fontNormal, flexColumn } from "@constants/styles/mixins";

export const Main = styled.main`
  ${flexColumn}
  align-items: center;
`;

export const Title = styled.h2`
  ${fontNormal}
  font-size: ${({ theme }) => theme.font.fontSize.XL}px;
  padding: ${({ theme }) => theme.space.L}px 0;
  font-weight: ${({ theme }) => theme.font.fontWeight.L};
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.darkGreen} 0.18%,
    ${({ theme }) => theme.colors.yellow} 49.3%,
    ${({ theme }) => theme.colors.lightGreen} 99.88%
  );
  text-align: center;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const ContactInfoWrapper = styled.div`
  ${displayFlex}
  border: 1px solid ${({ theme }) => theme.textColor};
  margin-left: ${({ theme }) => theme.space.S}px;
  margin-bottom: ${({ theme }) => theme.space.XXL170}px;
  margin-right: ${({ theme }) => theme.space.S}px;
  padding: ${({ theme }) => theme.space.L}px;
  gap: ${({ theme }) => theme.space.XL}px;
  justify-content: space-between;
  max-width: 800px;
  height: fit-content;

  @media (max-width: ${({ theme }) => theme.media.L}px) {
    flex-direction: column;
  }
`;

export const InfoContainer = styled.div`
  ${flexColumn}

  @media (max-width: ${({ theme }) => theme.media.L}px) {
    flex-direction: column;
    order: -1;
  }
`;

export const InnerTitle = styled.h3`
  ${fontNormal}
  font-size: ${({ theme }) => theme.font.fontSize.M}px;
  padding-top: ${({ theme }) => theme.space.XXS}px;
  padding-bottom: ${({ theme }) => theme.space.XS}px;
  font-weight: ${({ theme }) => theme.font.fontWeight.L};
  color: ${({ theme }) => theme.textColor};
  text-align: left;
`;

export const ContactContainer = styled.div`
  ${displayFlex}
  gap: ${({ theme }) => theme.space.XXS}px;
`;

export const Link = styled.a`
  font-size: ${({ theme }) => theme.font.fontSize.S}px;
  ${fontNormal}
  color: ${({ theme }) => theme.colors.gray};
  font-weight: ${({ theme }) => theme.font.fontWeight.S};
  text-align: left;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.green};
  }
`;

export const Text = styled.p`
  ${fontNormal}
  font-size: ${({ theme }) => theme.font.fontSize.S}px;
  color: ${({ theme }) => theme.colors.gray};
  text-align: left;
`;
