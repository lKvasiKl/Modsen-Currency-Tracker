import styled from "styled-components";

export const LinksAccordion = styled.button`
  display: flex;
  justify-content: space-between;
  border: none;
  outline: none;
  padding: 15px 0;
  border-bottom: 1px solid #607d94;
  transition: 0.4s;
  background-color: transparent;
`;

export const Title = styled.span`
  display: flex;
  color: #ffffff;
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.24px;
`;

export const Image = styled.img`
  background-color: transparent;
`;

export const LinksContainer = styled.div`
  display: none;
  overflow: hidden;
  flex-direction: column;

  a {
    padding-top: 10px;
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
