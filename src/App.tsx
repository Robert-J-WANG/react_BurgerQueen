import { Navbar } from "@/components/Navbar";
import { Home } from "@/pages/Home";
import { FoodCard } from "@/pages/FoodCard";
import { Route, Routes } from "react-router-dom";
import { useCartStore } from "./stores/cartStore";
import { useEffect } from "react";

export const App = () => {
  //rbt:使用zustand的订阅功能，通常写进useEffect钩子中
  /* ------------ 订阅isOpen变量来控制body垂直滚动条的显示和隐藏 ------------ */
  //  购物车打开时隐藏，否则显示
  useEffect(() => {
    const unsb = useCartStore.subscribe(
      (state) => state.isOpen, // 只订阅状态中的isOpen
      (isOpen) => {
        // 操作dom
        document.body.style.overflowY = isOpen ? "hidden" : "auto";
      }
    );
    /* ------------------------ 取消订阅 ------------------------ */
    return unsb;
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/foodCard" element={<FoodCard />} />
        </Routes>
      </div>
    </>
  );
};
