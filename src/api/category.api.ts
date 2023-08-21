import api from "./api";

const categoryGetAllRequest = () => {
  return api.get("/category");
};

const categoryGetById = (id: number) => {
  return api.get(`/category/${id}`);
};

export { categoryGetAllRequest, categoryGetById };
