import { addToCart, useCartStore } from "@/stores/cartStore";
import { selectSize, useFoodCard } from "@/stores/foodCardStore";
import { formatCurrency } from "@/utils/formatCurrency";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const FoodCard = () => {
  const foodCard = useFoodCard((state) => state.foodCard);
  const { name, image, price, desc } = foodCard;
  const sizeOptions = useFoodCard((state) => state.sizeOptions);
  const selectedSize = useFoodCard((state) => state.selectedSize);
  const selectedPrice = useFoodCard((state) => state.selectedPrice);
  const [flag, setFlag] = useState(false);
  console.log(flag);

  useEffect(() => {
    const unsb = useCartStore.subscribe(
      (state) => state.isOrdered,

      (isOrdered) => {
        setFlag(isOrdered);
      }
    );

    return unsb;
  }, []);

  return (
    <>
      <div className=" grid gap-4 lg:gap-10 p-4 my-10 lg:grid-cols-2 max-w-[600px] lg:w-full lg:max-w-full mx-auto">
        {/* leftside */}
        <div className="min-h-[600px] bg-yellow-500 max-h-[600px] rounded-3xl overflow-hidden">
          <img src={image} alt="/" className="object-cover w-full h-full" />
        </div>

        {/* rightside */}
        <div className="min-h-[600px] bg-gray-200 rounded-3xl flex flex-col justify-around p-10 ">
          <h1 className="text-3xl">{name}</h1>
          <h3 className="text-2xl">{formatCurrency(selectedPrice)}</h3>
          <p className="text-xl">{desc}</p>
          <div>
            <h4 className="text-2xl">Size * {selectedSize}</h4>
            <ul className="flex gap-5 my-2 text-2xl">
              {sizeOptions.map((item) => (
                <li
                  key={item.id}
                  className={`flex items-center justify-center w-12 h-12 ${
                    selectedSize === item.size
                      ? "text-black border-black border-2"
                      : "text-gray-400 border-gray-400 border"
                  }    rounded-full cursor-pointer`}
                  onClick={() => selectSize(item.size, price)}
                >
                  {item.size}
                </li>
              ))}
            </ul>
          </div>

          <button className="text-2xl" onClick={() => addToCart(foodCard)}>
            Order Now
          </button>

          {/* alert message box */}

          {flag ? (
            <div className="fixed w-[300px] top-32 right-32 alert alert-success ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 stroke-current shrink-0"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Your order add successfully!</span>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      {/* back button */}
      <div className="relative">
        <Link
          to="/react_BurgerQueen/"
          className="absolute cursor-pointer right-4"
        >
          <button className="w-64 text-orange-600 rounded-full btn hover:bg-orange-600">
            back
          </button>
        </Link>
      </div>
    </>
  );
};
