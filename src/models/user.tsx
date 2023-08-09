import { types } from "mobx-state-tree";

const userModel = types.model("User", {
  id: types.integer,
  first_name: types.string,
  last_name: types.string,
  middle_name: types.maybeNull(types.string),
  mobile: types.string,
  email: types.string,
  password: types.string,
  admin: types.integer,
  vendor: types.integer,
  intro: types.maybeNull(types.string),
  address: types.maybeNull(types.string),
  city: types.maybeNull(types.string),
  region: types.maybeNull(types.string),
});

export default userModel;
