import { observer } from "mobx-react-lite";
import { useQuery } from "react-query";
import { useLocation, useParams } from "react-router-dom";
import { useErrorBoundary } from "react-error-boundary";
import { rootStore } from "../strores/rootStore";
import ProductsLayout from "./ProductsLayout";

const SearchProducts = observer(() => {
  const { showBoundary } = useErrorBoundary();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const currentPage = Number(queryParams.get("page")) || 1;

  const filterValue = queryParams.get("filter") || "";

  const searchParams = queryParams.get("text");

  const { productStore } = rootStore;

  const { data: products, isLoading } = useQuery({
    queryKey: ["products", searchParams, currentPage, filterValue],
    queryFn: async () => {
      try {
        return await productStore.searchByParams(
          searchParams!,
          currentPage,
          filterValue
        );
      } catch (error) {
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
      {!products.data.products.length ? (
        <div className="text-3xl bold mb-2 mt-4 ml-4">No results found</div>
      ) : (
        <>
          <h1 className="text-3xl bold mb-2 mt-4 ml-4">
            Results for: {searchParams}
          </h1>
          <ProductsLayout
            productsData={products.data}
            currentPage={currentPage}
            queryParams={queryParams}
          />
        </>
      )}
    </div>
  );
});

export default SearchProducts;
