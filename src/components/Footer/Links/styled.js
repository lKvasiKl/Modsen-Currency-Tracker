import styled from "styled-components";

export const LinksSection = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  color: #ffffff;
  font-family: Poppins;
  font-size: 28px;
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
    color: #898989;
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration: none;

    &:hover {
      color: #84dd37;
    }
  }
`;
