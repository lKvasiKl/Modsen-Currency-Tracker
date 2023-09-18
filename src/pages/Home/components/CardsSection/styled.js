import styled from "styled-components";

export const CardsSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 86px;
  width: 100%;
  max-width: 1140px;
`;

export const CardsSectionTitle = styled.p`
  max-width: 520px;
  flex-shrink: 0;
  color: #ffffff;
  font-family: Poppins;
  font-size: 32px;
  font-style: normal;
  font-weight: 300;
  line-height: 41.143px;
  border-bottom: 2px solid #474747;
  padding-bottom: 25px;
  margin-bottom: 50px;
`;

export const CardsList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
