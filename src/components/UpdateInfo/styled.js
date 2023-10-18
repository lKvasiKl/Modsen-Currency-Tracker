import styled, { keyframes } from "styled-components";

import { displayFlex, lineHeightSmall } from "@constants/styles/mixins";

const pulseAnimation = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
`;

const maxMobileWidthXXS = ({ theme }) => theme.media.XXS;

const cardLightGrayColor = ({ theme }) => theme.colors.cardLightGray;
const spaceXXS = ({ theme }) => theme.space.XXS;
const spaceS18 = ({ theme }) => theme.space.S18;
const spaceXL56 = ({ theme }) => theme.space.XL56;
const fontSizeS = ({ theme }) => theme.font.fontSize.S;
const fontSizeL = ({ theme }) => theme.font.fontSize.L;
const fontWeightXS = ({ theme }) => theme.font.fontWeight.XS;

export const UpdateInfoContainer = styled.section`
  ${displayFlex}
  padding: ${spaceXL56}px ${spaceXXS}px;
  gap: ${spaceS18}px;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  animation: ${pulseAnimation} 2s ease-in-out infinite;
  user-select: none;

  @media (max-width: ${maxMobileWidthXXS}px) {
    width: 35px;
    height: 35px;
  }
`;

export const Text = styled.p`
  ${lineHeightSmall}
  color: ${cardLightGrayColor};
  font-size: ${fontSizeL}px;
  font-weight: ${fontWeightXS};

  @media (max-width: ${maxMobileWidthXXS}px) {
    font-size: ${fontSizeS}px;
  }
`;
