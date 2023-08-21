import { useLocation, Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import { observer } from "mobx-react-lite";
import { ReactNode } from "react";
import { useQuery } from "react-query";
import { rootStore } from "../strores/rootStore";

const ProtectedRoute: React.FC<{ children: ReactNode }> = observer(
  ({ children }): ReactNode => {
    const { profileStore } = rootStore;
    const location = useLocation();
    const token = Cookies.get("token");

    if (!token || !profileStore.isAuth) {
      profileStore.cleanAuthData();
      return (
        <Navigate
          to="/SignIn"
          state={{ from: location }}
          replace
        />
      );
    }

    const { data, isError, isSuccess } = useQuery("user", async () => {
      try {
        return await profileStore.getUserByToken(token);
      } catch (err) {
        console.log(err);
        throw err;
      }
    });

    if (isError) {
      profileStore.cleanAuthData();
      return (
        <Navigate
          to="/SignIn"
          state={{ from: location }}
          replace
        />
      );
    }

    if (isSuccess) {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      const { id, first_name, last_name, mobile, email, admin, vendor } =
        data.data;

      profileStore.user?.setFields({
        id,
        first_name,
        last_name,
        mobile,
        email,
        admin,
        vendor,
      });
    }

    return children;
  }
);

export default ProtectedRoute;
