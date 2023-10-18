import { request } from "./axiosService";

import { getEnvVariables, ENV_VARIABLE_KEYS } from "@constants/envVariables";

const CURRENCY_API_URL = getEnvVariables(ENV_VARIABLE_KEYS.currencyApiUrl);
const CURRENCY_API_KEY = getEnvVariables(ENV_VARIABLE_KEYS.currencyApiKey);
const SPLITTER = getEnvVariables(ENV_VARIABLE_KEYS.splitter);

const getCurriencies = async (currencies) => {
  const options = {
    method: "GET",
    url: `${CURRENCY_API_URL}`,
    params: {
      apikey: `${CURRENCY_API_KEY}`,
      currencies: currencies.join(SPLITTER),
    },
  };

  const response = await request(options);

  return response.data;
};

export default getCurriencies;
