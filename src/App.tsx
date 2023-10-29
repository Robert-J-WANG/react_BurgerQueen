import { Navbar } from "@/components/Navbar";
import Hero from "@/components/Hero";
import HeadlineCards from "@/components/HeadlineCards";
import Food from "@/components/Food";
import Category from "./components/Category";

export const App = () => {
  return (
    <div className="max-w-[1418px] mx-auto ">
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Food />
      <Category />
    </div>
  );
};
