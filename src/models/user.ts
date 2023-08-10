import { types, Instance } from "mobx-state-tree";

const user = types
  .model("user", {
    id: types.integer,
    first_name: types.string,
    last_name: types.string,
    mobile: types.string,
    email: types.string,
    admin: types.integer,
    vendor: types.integer,
  })
  .actions((self) => {
    const setFields = (fields: any) => {
      self.id = fields.id;
      self.first_name = fields.first_name;
      self.last_name = fields.last_name;
      self.mobile = fields.mobile;
      self.email = fields.email;
      self.admin = fields.admin;
      self.vendor = fields.vendor;
    };

    return { setFields };
  });

export type UserModel = Instance<typeof user>;

export default user;
