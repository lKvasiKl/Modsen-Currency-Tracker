import { COLORS } from "./styles/colors";
import { FONT } from "./styles/fonts";
import { MEDIA } from "./styles/media";
import { SPACES } from "./styles/spaces";
import { DISPLAY } from "./styles/display";

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
  display: {
    ...DISPLAY,
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
