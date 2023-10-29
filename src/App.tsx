import { Navbar } from "@/components/Navbar";
import { Home } from "@/pages/Home";
import { FoodCard } from "@/pages/FoodCard";
import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <div className="max-w-[1418px] mx-auto ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/foodCard" element={<FoodCard />} />
      </Routes>
    </div>
  );
};
