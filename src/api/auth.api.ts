import api from "./api";
import { IRegistrationBody, ILogInBody } from "../types/api.types";

const registrationRequest = (newUser: IRegistrationBody) => {
  newUser.admin = 0;
  newUser.vendor = 1;

  return api.post("/auth/reg", newUser);
};

const logInRequest = (logInData: ILogInBody) => {
  return api.post("/auth/login", logInData);
};

const getUserByTokenRequest = (token: string) => {
  return api.post("/auth/token", { token });
};

export { logInRequest, registrationRequest, getUserByTokenRequest };
