import { configuretedAxios } from "../config/AxiosConfig";

export const api = {
  getAllArctiles: async function (page, elemenNumber) {
    try {
      const response = await configuretedAxios.get(
        `articles/getAll?pageNum=${page}&pageSize=${elemenNumber}`
      );
      console.log(response, "get Articles");
      return response;
    } catch (error) {
      console.log(error, "get Articles error");
    }
  },
  getAllQuizes: async function () {
    try {
      const response = await configuretedAxios.get("quizzes/main");
      console.log(response, "get Quizes");
      return response;
    } catch (error) {
      console.log(error, "get Quizes error");
    }
  },
  getFourQuiz: async function () {
    try {
      const response = await configuretedAxios.get("");
      console.log(response, "get Quizes");
      return response;
    } catch (error) {
      console.log(error, "get Quizes error");
    }
  },
  getQuestion: async function () {
    try {
      const response = await configuretedAxios.get("");
      console.log(response, "get Quizes");
      return response;
    } catch (error) {
      console.log(error, "get Quizes error");
    }
  },
};
