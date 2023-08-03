import { types, Instance } from "mobx-state-tree";
import categoriesStore from "./categoryStore";

const RootStore = types.model("RootStroe", {
  categoriesStore,
});

const rootStore = RootStore.create({
  categoriesStore: { categories: [] },
});

export type Root = Instance<typeof rootStore>;

export { rootStore, RootStore };
