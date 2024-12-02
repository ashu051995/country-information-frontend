import { api } from "../constants/api.constant";
import { apiGatewayInstance } from "./axios-instances";

const fetchCountryList = (params: Record<string, any>) => {
  console.log("countrylIst service");
  return apiGatewayInstance
    .get(`${api.country}`, { params })
    .then((response: any) => {
      return response;
    })
    .catch((error: any) => {
      return Promise.reject(error);
    });
};

const fetchCountryDetail = (code: string) => {
  return apiGatewayInstance
    .get(`${api.country}/${code}`)
    .then((response: any) => {
      return response;
    })
    .catch((error: any) => {
      return Promise.reject(error);
    });
};

const searchCountrylist = (params: Record<string, any>) => {
  return apiGatewayInstance
    .get(`${api.searchCountry}`, { params })
    .then((response: any) => {
      return response;
    })
    .catch((err: any) => {
      return Promise.reject(err);
    });
};

export default {
  fetchCountryList,
  fetchCountryDetail,
  searchCountrylist,
};
