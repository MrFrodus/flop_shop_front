import api from "./api";
import { IRegistrationBody } from "../types/api.types";

const registrationRequest = (newUser: IRegistrationBody) => {
  newUser.admin = 0;
  newUser.vendor = 1;
  return api.post("/auth/reg", newUser);
};

export default registrationRequest;
