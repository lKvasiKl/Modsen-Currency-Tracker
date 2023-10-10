import styled from "styled-components";

export const Main = styled.main`
  ${({ theme }) => theme.display.flexColumn};
  align-items: center;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: ${({ theme }) => theme.font.fontSize.XL}px;
  padding: ${({ theme }) => theme.space.thirty}px 0;
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

export const ContactInfoWrapper = styled.div`
  ${({ theme }) => theme.display.flex};
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.textColor};
  max-width: 800px;
  height: fit-content;
  matgin-left: ${({ theme }) => theme.space.twenty}px;
  margin-bottom: ${({ theme }) => theme.space.oneHundredSeventy}px;
  matgin-right: ${({ theme }) => theme.space.twenty}px;
  padding: ${({ theme }) => theme.space.thirty}px;
  gap: ${({ theme }) => theme.space.fifty}px;

  @media (max-width: ${({ theme }) => theme.media.L}px) {
    flex-direction: column;
  }
`;

export const InfoContainer = styled.div`
  ${({ theme }) => theme.display.flexColumn};

  @media (max-width: ${({ theme }) => theme.media.L}px) {
    flex-direction: column;
    order: -1;
  }
`;

export const InnerTitle = styled.h3`
  text-align: left;
  font-size: ${({ theme }) => theme.font.fontSize.M}px;
  padding-top: ${({ theme }) => theme.space.ten}px;
  padding-bottom: ${({ theme }) => theme.space.fifteen}px;
  font-weight: ${({ theme }) => theme.font.fontWeight.L};
  ${({ theme }) => theme.font.fontNormal};
  color: ${({ theme }) => theme.textColor};
`;

export const ContactContainer = styled.div`
  ${({ theme }) => theme.display.flex};
  gap: ${({ theme }) => theme.space.ten}px;
`;

export const Link = styled.a`
  text-align: left;
  font-size: ${({ theme }) => theme.font.fontSize.S}px;
  ${({ theme }) => theme.font.fontNormal};
  color: ${({ theme }) => theme.colors.gray};
  font-weight: ${({ theme }) => theme.font.fontWeight.S};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.green};
  }
`;

export const Text = styled.p`
  text-align: left;
  font-size: ${({ theme }) => theme.font.fontSize.S}px;
  ${({ theme }) => theme.font.fontNormal};
  color: ${({ theme }) => theme.colors.gray};
`;
