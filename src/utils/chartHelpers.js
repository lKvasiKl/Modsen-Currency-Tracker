import { COLORS } from "@constants/styles/colors";

const getBarColors = (currencyData) => {
  return currencyData.map((currentValue, index, array) => {
    if (index === 0 || array[index - 1].openPrice < currentValue.closePrice) {
      return COLORS.successGreen;
    } else {
      return COLORS.errorRed;
    }
  });
};

export { getBarColors };
