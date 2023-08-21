import { types, Instance } from "mobx-state-tree";
import categoriesStore from "./categoryStore";
import profileStore from "./profileStore";
import productStore from "./productStore";

const RootStore = types.model("RootStore", {
  categoriesStore,
  profileStore,
  productStore,
});

const rootStore = RootStore.create({
  categoriesStore: { categories: [] },
  profileStore: {
    user: {
      id: 0,
      first_name: "",
      last_name: "",
      mobile: "",
      email: "",
      admin: 0,
      vendor: 0,
    },
    isAuth: false,
  },
  productStore: {},
});

export type Root = Instance<typeof rootStore>;

export { rootStore, RootStore };
