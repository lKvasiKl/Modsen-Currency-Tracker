import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 56px;
  padding: 30px 0;
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

export const ContactInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #ffffff;
  max-width: 800px;
  width: 100%;
  height: fit-content;
  margin-bottom: 170px;
  padding: 30px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InnerTitle = styled.h3`
  text-align: left;
  font-size: 25px;
  padding-top: 10px;
  padding-bottom: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: #ffffff;
`;

export const ContactContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const Link = styled.a`
  text-align: left;
  font-size: 20px;
  font-style: normal;
  line-height: normal;
  color: #898989;
  font-weight: 400;
  text-decoration: none;

  &:hover {
    color: #84dd37;
  }
`;

export const Text = styled.p`
  text-align: left;
  font-size: 20px;
  font-style: normal;
  line-height: normal;
  color: #898989;
`;
