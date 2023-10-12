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

export const fontNormal = css`
  line-height: normal;
  font-style: normal;
`;

export const fontNormal150 = css`
  font-style: normal;
  line-height: 150%;
`;

export const fontNormal49 = css`
  font-style: normal;
  line-height: 49px;
`;

export const fontNormal41 = css`
  font-style: normal;
  line-height: 41px;
`;
