import { types, flow, getParent, cast } from "mobx-state-tree";
import registrationRequest from "../api/auth.api";
import userModel from "../models/user";
import { IRegistrationBody } from "../types/api.types";
import { IApiError } from "../types/error.types";

const profileStore = types.model("profileStore", {}).actions((self) => {
  const register = flow(function* (registrationData: IRegistrationBody) {
    const newUserId = yield registrationRequest(registrationData);
    return newUserId;
  });

  return { register };
});

export default profileStore;
