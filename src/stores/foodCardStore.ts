import { sizeOptions } from "@/data/data";
import { create } from "zustand";
import { devtools, persist, subscribeWithSelector } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const initState = {
  foodCard: {
    id: 0,
    name: "",
    category: "",
    image: "",
    price: 0,
    desc: "",
  },
  sizeOptions: sizeOptions,
  selectedSize: "",
  selectedPrice: 0,
};

export const useFoodCard = create<typeof initState>()(
  immer(
    devtools(
      subscribeWithSelector(
        persist(() => initState, {
          name: "foodCard",
        })
      ),
      {
        name: "foodCard",
      }
    )
  )
);
export const setFoodCard = (item: TmenuItem) => {
  useFoodCard.setState((state) => {
    state.foodCard = item;
  });
};

export const selectSize = (size: string, price: number) => {
  useFoodCard.setState((state) => {
    state.selectedSize = size;
    switch (size) {
      case "S":
        state.selectedPrice = price;
        break;
      case "M":
        state.selectedPrice = price * 1.25;
        break;
      case "L":
        state.selectedPrice = price * 1.5;
        break;
    }
  });
};
