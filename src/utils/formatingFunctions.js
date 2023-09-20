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
  const REGEX_TRAILING_ZEROS_AFTER_DECIMAL = /\.?0+$/;

  if (rates && rates.data && rates.data[id]) {
    return `$ ${rates.data[id].value
      .toFixed(5)
      .replace(REGEX_TRAILING_ZEROS_AFTER_DECIMAL, "")}`;
  } else {
    return rateValue ? rateValue : "Loading...";
  }
};

export { formatTime, formatRateValue };
