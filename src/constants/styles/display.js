const DISPLAY_FLEX = {
  display: "flex",
};

export const DISPLAY = {
  block: {
    display: "block",
  },
  inlineBlock: {
    display: "inline-block",
  },
  flex: {
    ...DISPLAY_FLEX,
  },
  flexColumn: {
    ...DISPLAY_FLEX,
    "flex-direction": "column",
  },
  flexRow: {
    ...DISPLAY_FLEX,
    "flex-direction": "row",
  },
  none: {
    display: "none",
  },
};
