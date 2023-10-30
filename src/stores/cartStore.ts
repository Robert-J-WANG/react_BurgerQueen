import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools, persist, subscribeWithSelector } from "zustand/middleware";
import { nanoid } from "nanoid";
import { useFoodCard } from "./foodCardStore";

const initState = {
  cartItems: [] as TCartItem[],
  isOpen: false,
  totalCount: 0,
  totalPrice: 0,
  nav: false,
};

export const useCartStore = create(
  immer(
    devtools(
      subscribeWithSelector(
        persist(() => initState, {
          name: "cartStoreState",
        })
      ),
      {
        name: "cartStore",
      }
    )
  )
);

export const setNav = () => {
  useCartStore.setState((state) => {
    state.nav = !state.nav;
  });
};

export const setIsOpen = () => {
  useCartStore.setState((state) => {
    state.isOpen = !state.isOpen;
  });
};

export const addToCart = (selectedItem: TmenuItem) => {
  const selectedPrice = useFoodCard.getState().selectedPrice;
  const selectedSize = useFoodCard.getState().selectedSize;
  if (selectedSize === "") {
    alert("Please select a size");
  }
  useCartStore.setState((state) => {
    const itemIndex = state.cartItems.findIndex(
      (item) => item.data_id === selectedItem.id && item.size === selectedSize
    );
    if (itemIndex !== -1) {
      state.cartItems[itemIndex].count++;
    } else {
      const updatedItem: TCartItem = {
        id: nanoid(),
        data_id: selectedItem.id,
        image: selectedItem.image,
        name: selectedItem.name,
        count: 1,
        price: selectedPrice,
        size: selectedSize,
      };
      state.cartItems.push(updatedItem);
    }
    state.totalCount = updateTotalCount(state.cartItems);
    state.totalPrice = updateTotalPrice(state.cartItems);
  });
};

export const increaseItem = (id: string) => {
  useCartStore.setState((state) => {
    state.cartItems.find((item) => item.id === id)!.count += 1;
    state.totalCount = updateTotalCount(state.cartItems);
    state.totalPrice = updateTotalPrice(state.cartItems);
  });
};

export const decreaseItem = (id: string) => {
  useCartStore.setState((state) => {
    const itemToDecrease = state.cartItems.find((item) => item.id === id);

    if (itemToDecrease!.count > 0) {
      itemToDecrease!.count -= 1;
    }
    state.totalCount = updateTotalCount(state.cartItems);
    state.totalPrice = updateTotalPrice(state.cartItems);
  });
};

export const removeItem = (id: string) => {
  useCartStore.setState((state) => {
    state.cartItems = state.cartItems.filter((item) => item.id !== id);
    state.totalCount = updateTotalCount(state.cartItems);
    state.totalPrice = updateTotalPrice(state.cartItems);
    // 删掉所有的item时，关闭购物车
    state.isOpen = state.cartItems.length === 0 ? false : true;
  });
};

const updateTotalCount = (cartItems: TCartItem[]) => {
  return cartItems.reduce((prevCount, item) => prevCount + item.count, 0);
};
const updateTotalPrice = (cartItems: TCartItem[]) => {
  return cartItems.reduce(
    (prevPrice, item) => prevPrice + item.count * item.price,
    0
  );
};
