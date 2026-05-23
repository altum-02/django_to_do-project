import api from "../api/axios";
import type {
  LoginData,
  TokenResponse,
} from "../types/auth";

export const loginUser = async (
  data: LoginData
): Promise<TokenResponse> => {
  const response = await api.post("token/", data);

  return response.dat