import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  padding: 32.95px 310px 58.03px 0;
  background: linear-gradient(
    253deg,
    #121212 11.77%,
    #00ce2c20 49.12%,
    #121212b8 91.12%
  );

  @media (max-width: 1200px) {
    padding: 32.95px 0 58.03px 0;
  }
`;

export const SectionContainer = styled.section`
  display: flex;
  align-items: center;
  background-color: transparent;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: center;
  background-color: transparent;

  @media (max-width: 1200px) {
    align-items: center;
  }
`;

export const Title = styled.h1`
  flex-shrink: 0;
  text-align: right;
  max-width: 760px;
  font-size: 76px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding-right: 70px;
  background: linear-gradient(
    90deg,
    #00ce2c 0.18%,
    #aedf23 49.3%,
    #a3dc00 99.88%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 1200px) {
    padding: 0;
    text-align: center;
  }

  @media (max-width: 700px) {
    font-size: 50px;
  }
`;

export const Quote = styled.p`
  flex-shrink: 0;
  color: #d9d9d9;
  text-align: center;
  font-size: 25px;
  max-width: 400px;
  font-style: normal;
  font-weight: 300;
  line-height: 46.772px;
  background-color: transparent;
`;

export const Logotype = styled.img`
  flex-shrink: 0;
  user-select: none;
  background-color: transparent;

  @media (max-width: 1200px) {
    display: none;
  }
`;
