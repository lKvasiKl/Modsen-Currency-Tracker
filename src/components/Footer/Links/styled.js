import styled from "styled-components";

export const LinksSection = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  color: ${({ theme }) => theme.textColor};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  gap: 17px;

  a {
    color: ${({ theme }) => theme.colors.gray};
    font-size: ${({ theme }) => theme.fontSize.m};
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.colors.green};
    }
  }
`;
