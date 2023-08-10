import { types, flow, getParent, cast } from "mobx-state-tree";
import Cookies from "js-cookie";
import { registrationRequest, logInRequest } from "../api/auth.api";
import user from "../models/user";
import { IRegistrationBody, ILogInBody } from "../types/api.types";

const defaultUser = {
  id: 0,
  first_name: "",
  last_name: "",
  mobile: "",
  email: "",
  admin: 0,
  vendor: 0,
};

const profileStore = types
  .model("profileStore", {
    user: types.maybeNull(user),
    isAuth: types.boolean,
  })
  .actions((self) => {
    const cleanAuthData = () => {
      self.isAuth = false;
      self.user = cast(defaultUser);
    };

    const setIsAuth = (authStatus: boolean) => {
      self.isAuth = authStatus;
    };

    const register = flow(function* (registrationData: IRegistrationBody) {
      const newUserId = yield registrationRequest(registrationData);
      return newUserId;
    });

    const logIn = flow(function* (logInData: ILogInBody) {
      const userData = yield logInRequest(logInData);
      console.log(userData);
      // eslint-disable-next-line @typescript-eslint/naming-convention
      const { id, first_name, last_name, mobile, email, admin, vendor } =
        userData.data.user;

      self.user?.setFields({
        id,
        first_name,
        last_name,
        mobile,
        email,
        admin,
        vendor,
      });

      self.isAuth = true;

      console.log(userData.data.token);

      Cookies.set("token", userData.data.token);
    });

    const logOut = () => {
      cleanAuthData();
      Cookies.remove("token");
    };

    return { register, logIn, logOut };
  });

export default profileStore;
