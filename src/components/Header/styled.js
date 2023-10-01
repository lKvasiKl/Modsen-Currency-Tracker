import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  padding: 32.95px 310px 58.03px 0;
  background: linear-gradient(253deg, #121212 11.77%, #2479408a 91.12%);

  @media (max-width: 1200px) {
    padding: 32.95px 0 58.03px 0;
  }
`;

export const SectionContainer = styled.section`
  display: flex;
  align-items: center;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: center;

  @media (max-width: 1200px) {
    align-items: center;
  }
`;

export const Title = styled.h1`
  flex-shrink: 0;
  text-align: right;
  max-width: 760px;
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding-right: 70px;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.darkGreen} 0.18%,
    ${({ theme }) => theme.colors.yellow} 49.3%,
    ${({ theme }) => theme.colors.lightGreen} 99.88%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 1200px) {
    padding: 0;
    text-align: center;
  }

  @media (max-width: 700px) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  @media (max-width: 500px) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

export const Quote = styled.p`
  flex-shrink: 0;
  color: #d9d9d9;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.m};
  max-width: 400px;
  font-style: normal;
  font-weight: 300;
  line-height: 46.772px;

  @media (max-width: 500px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

export const Logotype = styled.img`
  flex-shrink: 0;
  user-select: none;

  @media (max-width: 1200px) {
    display: none;
  }
`;
