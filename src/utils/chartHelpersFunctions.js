const GREEN_COLOR = "#16C782";
const RED_COLOR = "#EA3943";

const getBarColors = (currencyData) => {
  return currencyData.map((currentValue, index, array) => {
    if (index === 0 || array[index - 1].openPrice < currentValue.closePrice) {
      return GREEN_COLOR;
    } else {
      return RED_COLOR;
    }
  });
};

export { getBarColors };
