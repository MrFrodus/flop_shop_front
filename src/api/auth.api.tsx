import api from "./api";
import { IRegistrationBody, ILogInBody } from "../types/api.types";

export const registrationRequest = (newUser: IRegistrationBody) => {
  newUser.admin = 0;
  newUser.vendor = 1;
  return api.post("/auth/reg", newUser);
};

export const logInRequest = (logInData: ILogInBody) => {
  return api.post("/auth/login", logInData);
};
