import { ENV_VARIABLES } from "@constants/envVariables";

const convertCurrency = (amount, fromCurrency, toCurrency, rates) => {
  const exchangeRate =
    rates.data[toCurrency].value / rates.data[fromCurrency].value;
  const convertedAmount = (Number(amount) * exchangeRate).toFixed(
    ENV_VARIABLES.decimalPlaces,
  );

  return Number(convertedAmount);
};

export { convertCurrency };
