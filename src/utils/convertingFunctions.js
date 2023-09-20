import { formatDecimalTrimZeros } from "./formatingFunctions";

const DECIMAL_PLACES = process.env.REACT_APP_DECIMAL_PLACES;

const convertCurrency = (amount, fromCurrency, toCurrency, rates) => {
  const exchangeRate =
    rates.data[toCurrency].value / rates.data[fromCurrency].value;
  const convertedAmount = (amount * exchangeRate).toFixed(DECIMAL_PLACES);

  return formatDecimalTrimZeros(convertedAmount);
};

export { convertCurrency };
