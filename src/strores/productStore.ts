import { types, flow, getParent, cast } from "mobx-state-tree";
import { productGetByCatSlug, searchByParamsRequest } from "../api/product.api";

const productStore = types.model("productStore", {}).actions((self) => {
  const getProductsByCatSlug = flow(function* (
    slug: string,
    page: number,
    filter: string
  ) {
    const catsProducts = yield productGetByCatSlug(slug, page, filter);
    return catsProducts;
  });

  const searchByParams = flow(function* (
    text: string,
    page: number,
    filter: string
  ) {
    const searchResults = yield searchByParamsRequest(text, page, filter);
    return searchResults;
  });

  return { getProductsByCatSlug, searchByParams };
});

export default productStore;
