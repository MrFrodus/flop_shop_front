import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { rootStore } from "../strores/rootStore";

const Categories = observer(() => {
  const categoryStore = rootStore.categoriesStore;

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        await categoryStore.getAllCategories();
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategories();
  }, [categoryStore]);

  return (
    <div className="grid grid-cols-[1fr_1fr_1fr] md:grid-cols-[1fr_1fr_1fr_1fr] gap-4 my-10 mx-5 gap-y-8 drop-shadow-md max-w-full">
      {categoryStore.categories.map((item) => {
        return (
          <div
            className="h-72 w-72 border-2 border-sky-500 
          font-bold text-lg min-w-full max-w-full"
            key={item.id}
          >
            <Link to="/account">
              <h3 className="mt-4 ml-11">{item.title}</h3>
              <div className="flex justify-center mt-4">
                <img
                  src={`http://localhost:3001/images/${item.slug}.png`}
                  alt=""
                />
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
});

export default Categories;
