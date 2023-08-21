import { observer } from "mobx-react-lite";
import { useQuery } from "react-query";
import { useLocation, useParams } from "react-router-dom";
import { useErrorBoundary } from "react-error-boundary";
import { rootStore } from "../strores/rootStore";
import ProductsLayout from "./ProductsLayout";

const CategoryProducts = observer(() => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const currentPage = Number(queryParams.get("page")) || 1;

  const filterValue = queryParams.get("filter") || "";

  const { productStore } = rootStore;

  const { subcategory } = useParams();

  const { showBoundary } = useErrorBoundary();

  const { data: products, isLoading } = useQuery({
    queryKey: ["products", subcategory, currentPage, filterValue],
    queryFn: async () => {
      try {
        return await productStore.getProductsByCatSlug(
          subcategory!,
          currentPage,
          filterValue
        );
      } catch (error) {
        console.log(error);
        return showBoundary(error);
      }
    },
    keepPreviousData: true,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-3xl bold mb-2 mt-4 ml-4">
        {products.data.category.title}
      </h1>
      <ProductsLayout
        productsData={products.data}
        currentPage={currentPage}
        queryParams={queryParams}
      />
    </div>
  );
});

export default CategoryProducts;
