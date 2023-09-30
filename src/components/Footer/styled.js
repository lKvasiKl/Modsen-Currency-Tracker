import styled from "styled-components";

export const FooterConatiner = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 650px) {
    align-items: unset;
    padding: 0 30px;
  }
`;

export const FooterWrapper = styled.section`
  display: flex;
  flex-direction: row;
  gap: 105px;

  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 35px;
  }
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

  @media (max-width: 1200px) {
    justify-content: center;
  }
`;

export const Image = styled.img`
  user-select: none;
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

  @media (max-width: 1200px) {
    text-align: justify;
  }

  @media (max-width: 650px) {
    display: none;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  gap: 79px;

  @media (max-width: 650px) {
    display: none;
  }
`;

export const MobileLinksContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 651px) {
    display: none;
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
  user-select: none;

  @media (max-width: 650px) {
    text-align: center;
    font-size: 20px;
  }
`;
