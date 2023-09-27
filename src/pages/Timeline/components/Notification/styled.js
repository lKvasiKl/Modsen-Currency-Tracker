import styled from "styled-components";

export const NotificationContainer = styled.span`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${(props) => props.color};
  text-align: center;
  transition: transform 0.3s ease-in-out;
  color: #ffffff;
  z-index: 1;
  padding: 15px 0;
`;