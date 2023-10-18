export const ENV_VARIABLE_KEYS = {
  mapboxAccessToken: "mapboxAccessToken",
  cacheLifetime: "cacheLifetime",
  cacheCurrencyRatesKey: "cacheCurrencyRatesKey",
  cacheLastUpdateKey: "cacheLastUpdateKey",
  cacheThemeKey: "cacheThemeKey",
  currencyApiKey: "currencyApiKey",
  currencyApiUrl: "currencyApiUrl",
  splitter: "splitter",
  decimalPlaces: "decimalPlaces",
};

const ENV_VARIABLES = {
  [ENV_VARIABLE_KEYS.mapboxAccessToken]: process.env.REACT_APP_MAPBOX_API_KEY,
  [ENV_VARIABLE_KEYS.cacheLifetime]: Number(
    process.env.REACT_APP_CACHE_LIFETIME,
  ),
  [ENV_VARIABLE_KEYS.cacheCurrencyRatesKey]:
    process.env.REACT_APP_CACHE_CURRENCY_RATES_KEY,
  [ENV_VARIABLE_KEYS.cacheLastUpdateKey]:
    process.env.REACT_APP_CACHE_LAST_UPDATE_KEY,
  [ENV_VARIABLE_KEYS.cacheThemeKey]: process.env.REACT_APP_CACHE_THEME_KEY,
  [ENV_VARIABLE_KEYS.currencyApiKey]: process.env.REACT_APP_CURRENCY_API_KEY,
  [ENV_VARIABLE_KEYS.currencyApiUrl]: process.env.REACT_APP_CURRENCY_API_URL,
  [ENV_VARIABLE_KEYS.splitter]: process.env.REACT_APP_CURRENCY_API_SPLITTER,
  [ENV_VARIABLE_KEYS.decimalPlaces]: process.env.REACT_APP_DECIMAL_PLACES,
};

export const getEnvVariables = (key) => ENV_VARIABLES[key];
