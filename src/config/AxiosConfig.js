import axios from "axios";
import { API } from "../helpers/constants";

export const configuretedAxios = axios.create({
  baseURL: API,
});
