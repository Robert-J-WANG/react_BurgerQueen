import { useEffect } from "react";
import {
  filterByPrice,
  filterByType,
  setMenuItems,
  useMenuItems,
} from "@/stores/foodMenuStore";
import { formatCurrency } from "@/utils/formatCurrency";
import { Link } from "react-router-dom";
import { setFoodCard } from "@/stores/foodCardStore";

const Food = () => {
  const menuItems = useMenuItems((state) => state.menuItems);
  const filterType = useMenuItems((state) => state.filterItems.type);
  const filterPrice = useMenuItems((state) => state.filterItems.price);

  useEffect(() => {
    setMenuItems();
  }, []);

  return (
    <div className="w-full px-4 py-12 ">
      <h1 className="my-4 text-4xl font-bold text-center text-orange-600 ">
        <span className="py-2 duration-500 hover:border-b-4 hover:border-black/50">
          Top Rated Menu Items
        </span>
      </h1>

      {/* Filter Row */}
      <div className="flex flex-col justify-between lg:flex-row">
        {/* Fliter Type */}
        <div>
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex flex-wrap justfiy-between">
            {filterType.map((item) => {
              return (
                <button
                  key={item.id}
                  onClick={() => filterByType(item.type)}
                  className="m-1 text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white"
                >
                  {item.type}
                </button>
              );
            })}
          </div>
        </div>

        {/* Filter Price */}
        <div>
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="flex flex-wrap justfiy-between">
            {filterPrice.map((item) => {
              return (
                <button
                  key={item.id}
                  onClick={() => filterByPrice(item.price)}
                  className="m-1 text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white"
                >
                  {item.price - 5}-{item.price}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Display foods */}
      <div className="grid gap-10 pt-10 md:grid-cols-2 xl:grid-cols-3">
        {menuItems!.map((item) => (
          <Link
            key={item.id}
            className="duration-300 border rounded-lg shadow-lg cursor-pointer bg-slate-50 hover:scale-105 "
            to="/FoodCard"
            onClick={() => {
              setFoodCard(item);
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] md:h-[250px] lg:h-[300px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-4 py-8 md:text-xl lg:text-2xl">
              <p className="font-bold">{item.name}</p>
              <p>
                <span className="px-4 py-1 text-white bg-orange-500 rounded-full">
                  {formatCurrency(item.price)}
                </span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Food;
