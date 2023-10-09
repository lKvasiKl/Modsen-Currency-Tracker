import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.xl};
  padding: 30px 0;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
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
  display: flex;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.textColor};
  max-width: 800px;
  height: fit-content;
  margin: 0 20px 170px 20px;
  padding: 30px;
  gap: 50px;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    flex-direction: column;
    order: -1;
  }
`;

export const InnerTitle = styled.h3`
  text-align: left;
  font-size: ${({ theme }) => theme.fontSize.m};
  padding-top: 10px;
  padding-bottom: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: ${({ theme }) => theme.textColor};
`;

export const ContactContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const Link = styled.a`
  text-align: left;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-style: normal;
  line-height: normal;
  color: ${({ theme }) => theme.colors.gray};
  font-weight: 400;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.green};
  }
`;

export const Text = styled.p`
  text-align: left;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-style: normal;
  line-height: normal;
  color: ${({ theme }) => theme.colors.gray};
`;
