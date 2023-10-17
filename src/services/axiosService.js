import axios from "axios";

const axiosInstance = axios.create();

const request = async ({ headers = {}, method, url, data, params }) => {
  const options = {
    headers,
    method,
    url,
    data,
    params,
  };

  const result = await axiosInstance(options);

  return result.data;
};

export { request };
