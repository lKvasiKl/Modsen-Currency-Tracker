export const INPUT_CONFIG = [
  { label: "Open price", name: "openPriceInput" },
  { label: "High price", name: "highPriceInput" },
  { label: "Low price", name: "lowPriceInput" },
  { label: "Close price", name: "closePriceInput" },
];

export const INITIAL_INPUT_STATE = {
  openPriceInput: "0",
  highPriceInput: "0",
  lowPriceInput: "0",
  closePriceInput: "0",
};
export const MIN_INPUT_VALUE = 0;
export const MAX_INPUT_VALUE = 1000000;
export const ERROR_TEXT = `The price must be more then ${MIN_INPUT_VALUE} and less then ${MAX_INPUT_VALUE}.`;
export const CHART_ITEMS_LEFT_TEXT =
  "There are {remainingChartItems} values left before the chart can be built.";
