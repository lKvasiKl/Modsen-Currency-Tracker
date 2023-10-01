const BASE_THEME = {
  colors: {
    green: "#84dd37",
    darkGreen: "#00ce2c",
    lightGreen: "#a3dc00",
    yellow: "#aedf23",
    red: "#d10708",
    gray: "#898989",
    borderGray: "#202025",
    darkGray: "#474747",
  },
  fontSize: {
    xs: "16px",
    s: "20px",
    m: "24px",
    l: "32px",
    xl: "50px",
    xxl: "76px",
  },
};

export const THEME = {
  light: {
    ...BASE_THEME,
    backgroundColor: "#FFFFFF",
    textColor: "#000000",
  },
  dark: {
    ...BASE_THEME,
    backgroundColor: "#000000",
    textColor: "#FFFFFF",
  },
};
