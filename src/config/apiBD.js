import { createAxiosInstance } from "./api";
/**
 * App config
 */
export const config = {
	API_URL: process.env.REACT_APP_APIBD_BASE_URL,
};

export const { api, setApiHeader } = createAxiosInstance(config);
