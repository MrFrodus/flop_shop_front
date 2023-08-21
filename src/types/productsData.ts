import { IProduct } from "./product";

export interface IProductsData {
  category?: {
    id: number;
    parent_id: number;
    title: string;
    meta_title: string;
    slug: string;
    content: string;
  };
  pagination: {
    totalProducts: number;
    totalPages: number;
    perPage: number;
    currentPage: number;
  };
  products: [IProduct];
}
