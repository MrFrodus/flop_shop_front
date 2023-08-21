import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Select from "react-select";
import Pagination from "./Pagination";
import { IProductsData } from "../types/productsData";

interface ProductsLayoutProps {
  productsData: IProductsData;
  queryParams: URLSearchParams;
  currentPage: number;
}

const options = [
  { value: "date", label: "Date" },
  { value: "title", label: "Title" },
  { value: "rating", label: "Rating" },
  { value: "price", label: "Price" },
];

const ProductsLayout = ({
  productsData,
  queryParams,
  currentPage,
}: ProductsLayoutProps) => {
  const navigate = useNavigate();

  const [filterValue, setFilterValue] = useState(null);

  const handlePageChange = (newPage: number) => {
    queryParams.set("page", newPage.toString());
    navigate({ search: queryParams.toString() });
  };

  const handleChange = (selectedOption) => {
    setFilterValue(selectedOption.value);
  };

  useEffect(() => {
    if (filterValue) {
      const handleFilter = () => {
        queryParams.set("filter", filterValue);
        navigate({ search: queryParams.toString() });
      };

      handleFilter();
    }
  }, [filterValue]);

  return (
    <div>
      <div className="flex justify-end mr-4 flex-row items-center">
        <h3 className="text-lg">Order by:&nbsp;&nbsp;</h3>
        <Select
          className="w-40"
          defaultValue={filterValue}
          onChange={handleChange}
          options={options}
        />
      </div>
      <div className="flex justify-center flex-col">
        <div className="ml-4 my-4">
          <div className="grid grid-cols-[1fr_1fr_1fr] gap-2 gap-y-8">
            {productsData?.products.map((product) => {
              return (
                <div
                  key={product.id}
                  className="w-[320px] border h-[360px]"
                >
                  <div className="h-[260px] bg-slate-200">Space for image</div>
                  <div>
                    <h3>{product.title}</h3>
                    <div>
                      Rating: {product.rating_avg ? product.rating_avg : 0}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Pagination
          totalPages={productsData.pagination.totalPages}
          // eslint-disable-next-line react/jsx-no-bind
          handlePageChange={handlePageChange}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default ProductsLayout;
