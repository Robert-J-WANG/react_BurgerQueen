/// <reference types="vite/client" />

type TmenuItem = {
  id: number;
  name: string;
  category: string;
  image: string;
  price: number;
  desc: string;
};

type TfilterByType = {
  id: number;
  type: string;
};
type TfilterByPrice = {
  id: number;
  price: number;
};

type TCartItem = {
  id: string;
  data_id: number;
  name: string;
  price: number;
  size: string;
  count: number;
  image: string;
};
