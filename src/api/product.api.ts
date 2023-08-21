import api from "./api";

const productGetByCatSlug = (slug: string, page: number, filter: string) => {
  return api.get(`/product/category/${slug}`, {
    params: { page, filter },
  });
};

const searchByParamsRequest = (text: string, page: number, filter: string) => {
  return api.get("/product/search", {
    params: { text, page, filter },
  });
};

export { productGetByCatSlug, searchByParamsRequest };
