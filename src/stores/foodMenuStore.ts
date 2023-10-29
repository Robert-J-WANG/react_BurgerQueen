import { filterData, menuItemsData } from "@/data/data";
import { create } from "zustand";
import { devtools, persist, subscribeWithSelector } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const initState = {
  initMenuItems: [] as TmenuItem[], // 存储从api或data.js中获取的原始数据
  menuItems: [] as TmenuItem[], // 存储需要渲染到页面中的menuItems数据
  filterItems: {
    type: [] as TfilterByType[],
    price: [] as TfilterByPrice[],
  },
};

export const useMenuItems = create<typeof initState>()(
  immer(
    devtools(
      subscribeWithSelector(
        persist(() => initState, {
          name: "menu items",
        })
      ),
      {
        name: "menu items",
      }
    )
  )
);
export const setMenuItems = () => {
  useMenuItems.setState((state) => {
    state.initMenuItems = menuItemsData;
    state.menuItems = menuItemsData;
    state.filterItems = filterData;
  });
};

export const filterByType = (type: string) => {
  useMenuItems.setState((state) => {
    state.menuItems =
      type === "All"
        ? menuItemsData
        : useMenuItems
            .getState()
            .initMenuItems.filter(
              (item) => item.category === type.toLocaleLowerCase()
            );
  });
};

export const filterByPrice = (price: number) => {
  useMenuItems.setState((state) => {
    state.menuItems = useMenuItems
      .getState()
      .initMenuItems.filter(
        (item) => item.price >= price - 5 && item.price < price
      );
  });
};
