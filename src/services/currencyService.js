import { request } from "./axiosService";

const getCurriencies = async (currencies) => {
  const apiKey = process.env.REACT_APP_CURRENCY_API_KEY;
  const url = process.env.REACT_APP_CURRENCY_API_URL;
  const splitter = process.env.REACT_APP_CURRENCY_API_SPLITTER;

  const options = {
    method: "GET",
    url: `${url}`,
    params: {
      apikey: `${apiKey}`,
      currencies: currencies.join(splitter),
    },
  };

  const response = await request(options);

  return response.data;
};

export default getCurriencies;
