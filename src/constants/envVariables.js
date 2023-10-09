export const ENV_VARIABLES = {
  mapboxAccessToken: process.env.REACT_APP_MAPBOX_API_KEY,
  cacheLifetime: Number(process.env.REACT_APP_CACHE_LIFETIME),
  cacheCurrencyRatesKey: process.env.REACT_APP_CACHE_CURRENCY_RATES_KEY,
  cacheLastUpdateKey: process.env.REACT_APP_CACHE_LAST_UPDATE_KEY,
  cacheThemeKey: process.env.REACT_APP_CACHE_THEME_KEY,
  currencyApiKey: process.env.REACT_APP_CURRENCY_API_KEY,
  currencyApiUrl: process.env.REACT_APP_CURRENCY_API_URL,
  splitter: process.env.REACT_APP_CURRENCY_API_SPLITTER,
  decimalPlaces: process.env.REACT_APP_DECIMAL_PLACES,
};
