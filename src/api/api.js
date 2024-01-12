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
  getFilterArticles: async function (searchParam, filterParam) {
    try {
      const response = await configuretedAxios.get(
        `articles/get?name=${searchParam}&genre=${filterParam}`
      );
      console.log(response, "get Quizes");
      return response;
    } catch (error) {
      console.log(error, "get Quizes error");
    }
  },
  getText: async function (name) {
    try {
      const response = await configuretedAxios.get(
        `articles/description?name=${name}`
      );
      console.log(response, "get Text");
      return response;
    } catch (error) {
      console.log(error, "get Text error");
    }
  },
  getQuestions: async function (name) {
    try {
      const response = await configuretedAxios.get(
        `quizzes/questions?name=${name}`
      );
      console.log(response, "get quiestion");
      return response;
    } catch (error) {
      console.log(error, "get Questions error");
    }
  },
};
