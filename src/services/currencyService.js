import { request } from "./axiosService";

import { ENV_VARIABLES } from "@constants/envVariables";

const getCurriencies = async (currencies) => {
  const options = {
    method: "GET",
    url: `${ENV_VARIABLES.currencyApiUrl}`,
    params: {
      apikey: `${ENV_VARIABLES.currencyApiKey}`,
      currencies: currencies.join(ENV_VARIABLES.splitter),
    },
  };

  const response = await request(options);

  return response.data;
};

export default getCurriencies;
