const DECIMAL_PLACES = process.env.REACT_APP_DECIMAL_PLACES;

const formatTime = (milliseconds) => {
  const date = new Date(milliseconds);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const amPm = hours >= 12 ? "PM" : "AM";
  const formattedHours = (hours % 12 || 12).toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");

  return `${formattedHours}:${formattedMinutes} ${amPm}`;
};

const formatRateValue = (rates, id, rateValue) => {
  if (rates && rates.data && rates.data[id]) {
    const value = `$ ${rates.data[id].value.toFixed(DECIMAL_PLACES)}`;

    return formatDecimalTrimZeros(value);
  } else {
    return rateValue ? rateValue : "Loading...";
  }
};

const formatDecimalTrimZeros = (str) => {
  const REGEX_TRAILING_ZEROS_AFTER_DECIMAL = /\.?0+$/;

  return String(str).replace(REGEX_TRAILING_ZEROS_AFTER_DECIMAL, "");
};

const formatConvertedCurrency = (
  exchangeAmount,
  fromCurrency,
  convertedCurrencyValue,
  toCurrency,
) => {
  if (exchangeAmount) {
    return `${formatDecimalTrimZeros(
      exchangeAmount.toFixed(DECIMAL_PLACES),
    )} ${fromCurrency} = ${convertedCurrencyValue} ${toCurrency}`;
  } else {
    return "";
  }
};

export {
  formatTime,
  formatRateValue,
  formatDecimalTrimZeros,
  formatConvertedCurrency,
};
