import api from "../api/axios";

import type {
  LoginData,
  RegisterData,
} from "../types/auth";


export const loginUser = async (
  data: LoginData
) => {

  const response = await api.post(
    "token/",
    data
  );

  return response.data;
};


export const registerUser = async (
  data: RegisterData
) => {

  const response = await api.post(
    "accounts/register/",
    data
  );

  return response.data;
};