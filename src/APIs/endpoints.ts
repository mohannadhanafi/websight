import { BACKEND_API } from "../constants";
import { loginAPIParams } from "../types";

export const loginAPI = (params: loginAPIParams) =>
  `${BACKEND_API}/users?username=${params.username}&password=${params.password}`;

export const users = () => `${BACKEND_API}/cars`;
