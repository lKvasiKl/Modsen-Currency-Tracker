import { getEnvVariables, ENV_VARIABLE_KEYS } from "@constants/envVariables";

const DECIMAL_PLACES = getEnvVariables(ENV_VARIABLE_KEYS.decimalPlaces);

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
    const value = `$ ${Number(rates.data[id].value.toFixed(DECIMAL_PLACES))}`;

    return value;
  } else {
    return rateValue ? rateValue : "Loading...";
  }
};

const formatDate = (date) => {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
};

export { formatTime, formatRateValue, formatDate };
