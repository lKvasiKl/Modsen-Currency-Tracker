import { getEnvVariables, ENV_VARIABLE_KEYS } from "@constants/envVariables";

const DECIMAL_PLACES = getEnvVariables(ENV_VARIABLE_KEYS.decimalPlaces);

const convertCurrency = (amount, fromCurrency, toCurrency, rates) => {
  const exchangeRate =
    rates.data[toCurrency].value / rates.data[fromCurrency].value;
  const convertedAmount = (Number(amount) * exchangeRate).toFixed(
    DECIMAL_PLACES,
  );

  return Number(convertedAmount);
};

export { convertCurrency };
