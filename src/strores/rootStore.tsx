import { types, Instance } from "mobx-state-tree";
import categoriesStore from "./categoryStore";
import profileStore from "./profileStore";

const RootStore = types.model("RootStore", {
  categoriesStore,
  profileStore,
});

const rootStore = RootStore.create({
  categoriesStore: { categories: [] },
  profileStore: {},
});

export type Root = Instance<typeof rootStore>;

export { rootStore, RootStore };
