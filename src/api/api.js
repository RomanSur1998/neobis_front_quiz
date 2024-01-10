import { configuretedAxios } from "../config/AxiosConfig";

export const api = {
  getAllArctiles: async function (pageNumber) {
    try {
      const response = await configuretedAxios.get(`${pageNumber}`);
      console.log(response, "get Articles");
      return response;
    } catch (error) {
      console.log(error, "get Articles error");
    }
  },
  getAllQuizes: async function () {
    try {
      const response = await configuretedAxios.get("");
      console.log(response, "get Quizes");
      return response;
    } catch (error) {
      console.log(error, "get Quizes error");
    }
  },
};
