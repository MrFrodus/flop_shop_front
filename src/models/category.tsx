import { types } from "mobx-state-tree";

const category = types.model("Category", {
  id: types.integer,
  parent_id: types.maybeNull(types.integer),
  title: types.string,
  meta_title: types.string,
  slug: types.string,
  content: types.maybeNull(types.string),
  created_at: types.maybeNull(types.Date),
  updated_at: types.maybeNull(types.Date),
});

export default category;
