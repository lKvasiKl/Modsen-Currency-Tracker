import { COLORS, FONT, MEDIA, SPACES } from "./styles";

const BASE_THEME = {
  colors: {
    ...COLORS,
  },
  font: {
    ...FONT,
  },
  media: {
    ...MEDIA,
  },
  space: {
    ...SPACES,
  },
};

export const THEME = {
  light: {
    ...BASE_THEME,
    backgroundColor: COLORS.white,
    textColor: COLORS.black,
  },
  dark: {
    ...BASE_THEME,
    backgroundColor: COLORS.black,
    textColor: COLORS.white,
  },
};
