import styled from "styled-components";

const textColor = ({ theme }) => theme.textColor;
const spaceXS = ({ theme }) => theme.space.XS;

export const NotificationContainer = styled.span`
  background-color: ${({ color }) => color};
  color: ${textColor};
  padding: ${spaceXS}px 0;
  text-align: center;
  transition: transform 0.3s ease-in-out;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;
