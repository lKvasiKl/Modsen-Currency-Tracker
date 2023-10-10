import styled from "styled-components";

export const LinksSection = styled.section`
  ${({ theme }) => theme.display.flexColumn};
`;

export const Title = styled.span`
  color: ${({ theme }) => theme.textColor};
  font-size: ${({ theme }) => theme.font.fontSize.L}px;
  font-style: normal;
  font-weight: ${({ theme }) => theme.font.fontWeight.S};
  line-height: 150%;
`;

export const LinksContainer = styled.div`
  ${({ theme }) => theme.display.flexColumn};
  padding-top: ${({ theme }) => theme.space.fourty}px;
  gap: ${({ theme }) => theme.space.seventeen}px;

  a {
    color: ${({ theme }) => theme.colors.gray};
    font-size: ${({ theme }) => theme.font.fontSize.M}px;
    font-weight: ${({ theme }) => theme.font.fontWeight.S};
    line-height: normal;
    font-style: normal;
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.colors.green};
    }
  }
`;
