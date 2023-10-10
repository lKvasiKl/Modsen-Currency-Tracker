import styled from "styled-components";

export const Main = styled.main`
  ${({ theme }) => theme.display.flexColumn};
  align-items: center;
`;
