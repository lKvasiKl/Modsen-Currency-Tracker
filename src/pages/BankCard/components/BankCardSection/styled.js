import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.textColor};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 110px;
  text-align: center;

  @media (max-width: 650px) {
    padding: 0 20px;
  }
`;
