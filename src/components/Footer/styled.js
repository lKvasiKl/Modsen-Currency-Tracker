import styled from "styled-components";

export const FooterConatiner = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const FooterWrapper = styled.section`
  display: flex;
  flex-direction: row;
  gap: 105px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 482px;
  gap: 25px;
`;

export const Title = styled.div`
  display: flex;
  gap: 10px;
`;

export const Text = styled.h3`
  font-family: Poppins;
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  background: linear-gradient(
    90deg,
    #00ce2c 0.18%,
    #aedf23 49.3%,
    #a3dc00 99.88%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Quote = styled.p`
  color: #ffffff;
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: 150%;
`;

export const LinksContainer = styled.div`
  display: flex;
  gap: 79px;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.span`
  color: #ffffff;
  font-family: Poppins;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;

export const LinksSection = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  gap: 17px;

  a {
    color: #898989;
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration: none;
  }
`;

export const Copyright = styled.p`
  color: #898989;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  padding: 55px 0 40px 0;
`;
