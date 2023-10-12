import styled from "styled-components";

export const NotificationContainer = styled.span`
  background-color: ${(props) => props.color};
  color: ${({ theme }) => theme.textColor};
  padding: ${({ theme }) => theme.space.XS}px 0;
  z-index: 1;
  text-align: center;
  transition: transform 0.3s ease-in-out;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;
