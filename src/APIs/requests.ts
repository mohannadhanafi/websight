import axios from "axios";
import { loginAPI, users } from "./endpoints";
import { loginAPIParams } from "../types";

export const getLogin = (params: loginAPIParams) => axios.get(loginAPI(params));
export const getUsers = () => axios.get(users());
