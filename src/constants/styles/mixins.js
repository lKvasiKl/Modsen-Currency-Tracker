import { css } from "styled-components";

export const displayFlex = css`
  display: flex;
`;

export const flexColumn = css`
  ${displayFlex}
  flex-direction: column;
`;

export const flexRow = css`
  ${displayFlex}
  flex-direction: row;
`;

export const displayBlock = css`
  display: block;
`;

export const displayInlineBlock = css`
  display: inline-block;
`;

export const displayNone = css`
  display: none;
`;

const fontStyle = css`
  font-style: normal;
`;

export const normalFontStyle = css`
  ${fontStyle}
  line-height: normal;
`;

export const lineHeightLarge = css`
  ${fontStyle}
  line-height: 150%;
`;

export const lineHeightMedium = css`
  ${fontStyle}
  line-height: 50px;
`;

export const lineHeightSmall = css`
  ${fontStyle}
  line-height: 40px;
`;
