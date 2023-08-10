import { types, flow, getParent, cast } from "mobx-state-tree";
import { categoryGetAllRequest } from "../api/category.api";
import categoryModel from "../models/category";

const categoryStore = types
  .model("categoryStore", {
    categories: types.optional(types.array(categoryModel), []),
  })
  .actions((self) => {
    const getAllCategories = flow(function* () {
      console.log(123);

      const categories = yield categoryGetAllRequest();
      console.log({ categories });

      self.categories = categories.data;
    });

    const clear = () => {
      self.categories = cast([]);
    };

    return { getAllCategories, clear };
  });

export default categoryStore;
