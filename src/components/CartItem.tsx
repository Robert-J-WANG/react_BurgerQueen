import {
  decreaseItem,
  increaseItem,
  removeItem,
  useCartStore,
} from "@/stores/cartStore";
import { formatCurrency } from "@/utils/formatCurrency";
import {
  MdAddShoppingCart,
  MdDeleteSweep,
  MdRemoveShoppingCart,
} from "react-icons/md";

export const CartItem = () => {
  const cartItems = useCartStore((state) => state.cartItems);
  const totalPrice = useCartStore((state) => state.totalPrice);
  return (
    <div className="flex flex-col gap-4 my-4 ">
      <ul>
        {cartItems.map((cartItem) => (
          <li
            key={cartItem.id}
            className="w-full flex justify-between gap-5 items-center mb-4 h-[160px] bg-orange-100 rounded-xl overflow-hidden "
          >
            <img
              src={cartItem.image}
              alt="/"
              className="object-cover w-[200px] h-full "
            />
            <div className="flex flex-col gap-5">
              <h2 className="text-xl ">{cartItem.name}</h2>
              <p className="text-xl ">
                {cartItem.count} x{" "}
                <span className="font-bold">
                  {formatCurrency(cartItem.price)}
                </span>
              </p>
              <p className="text-xl">size: {cartItem.size}</p>
            </div>
            <div className="flex flex-col items-center gap-5 pr-2">
              <MdAddShoppingCart
                className="text-blue-700"
                size={30}
                onClick={() => increaseItem(cartItem.id)}
              />
              <MdDeleteSweep
                className="text-yellow-700"
                size={30}
                onClick={() => decreaseItem(cartItem.id)}
              />
              <MdRemoveShoppingCart
                className="text-red-700"
                size={30}
                onClick={() => removeItem(cartItem.id)}
              />
            </div>
          </li>
        ))}
      </ul>

      <div className="flex justify-between text-3xl">
        <p className="font-black text-orange-500">Total Price :</p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
    </div>
  );
};
