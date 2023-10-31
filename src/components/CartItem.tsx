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
            className="w-full flex  mb-4 h-[160px] bg-orange-100 rounded-xl overflow-hidden "
          >
            <div className="flex basis-11/12">
              <div className="mr-2 basis-2/5">
                <img
                  src={cartItem.image}
                  alt="/"
                  className="object-cover w-[200px] h-full "
                />
              </div>
              <div className="flex flex-col justify-center gap-5 md:text-xl basis-3/5">
                <h2>{cartItem.name}</h2>
                <p>
                  {cartItem.count} x{" "}
                  <span className="font-bold">
                    {formatCurrency(cartItem.price)}
                  </span>
                </p>
                <p>size: {cartItem.size}</p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-5 basis-1/12">
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

      <div className="flex justify-between text-xl md:text-2xl lg:text-3xl">
        <p className="font-black text-orange-500">Total Price :</p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
    </div>
  );
};
