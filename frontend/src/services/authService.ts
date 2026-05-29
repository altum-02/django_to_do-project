import api from "../api/axios";

import type {
  LoginData,
  RegisterData,
  TokenResponse,
} from "../types/auth";


export const loginUser = async (
  data: LoginData
): Promise<TokenResponse> => {

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