import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { useErrorBoundary } from "react-error-boundary";
import { rootStore } from "../strores/rootStore";
import Backdrop from "./Backdrop";

interface CategoriesMenuProps {
  isMounted: boolean;
  status: string;
}

const CategoriesMenu = observer(
  ({ isMounted, status }: CategoriesMenuProps) => {
    const categoryStore = rootStore.categoriesStore;

    const { showBoundary } = useErrorBoundary();

    useEffect(() => {
      const getCategories = async () => {
        try {
          return await categoryStore.getAllCategories();
        } catch (error) {
          return showBoundary(error);
        }
      };

      getCategories();
    }, [categoryStore]);

    return (
      <div className="flex justify-center z-20">
        <div
          className={`transition-opacity duration-300 absolute 
          top-24 bg-slate-50 border shadow-md 
          rounded-md z-20  w-11/12 max-h-screen 
          ${status === "preEnter" ? "transform scale-y-0 opacity-0 " : ""}`}
        >
          <div
            className="grid grid-cols-[1fr_1fr_1fr_1fr] 
            gap-2 my-2 mx-4 gap-y-2 text-sky-600"
          >
            {categoryStore.categories.map((cat) => {
              return (
                <div
                  key={cat.id}
                  className="flex flex-col border border-solid h-52 w-64 border-sky-500"
                >
                  <div className="flex flex-row text-lg font-normal w-full mt-2 ml-2">
                    <img
                      src={`http://localhost:3001/images/categories/${cat.slug}.png`}
                      alt=""
                      className="w-[28px] mr-2"
                    />
                    <h3>{cat.title} </h3>
                  </div>
                  <ul className="flex flex-col text-sm text-black ml-2">
                    {cat.sub_categories.map((subcat) => {
                      return (
                        <li key={subcat.id}>
                          <Link
                            to={`${cat.slug}/${subcat.slug}`}
                            className="hover:underline hover:text-blue-500"
                          >
                            {subcat?.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                  <div className="text-sky-600 ml-2 items-end flex mt-auto ">
                    Show more
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Backdrop />
      </div>
    );
  }
);

export default CategoriesMenu;
