import { types } from "mobx-state-tree";
import { maybeNull } from "mobx-state-tree/dist/internal";

const subCategory = types.model("subCategory", {
  id: types.integer,
  parent_id: types.maybeNull(types.integer),
  title: types.string,
  meta_title: types.string,
  slug: types.string,
  content: types.maybeNull(types.string),
});

const categoryModel = types.model("categoryModel", {
  id: types.integer,
  parent_id: types.maybeNull(types.integer),
  title: types.string,
  meta_title: types.string,
  slug: types.string,
  content: types.maybeNull(types.string),
  sub_categories: types.array(subCategory),
});

export default categoryModel;
