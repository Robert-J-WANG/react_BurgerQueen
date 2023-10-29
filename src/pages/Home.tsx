import Category from "@/components/Category";
import Food from "@/components/Food";
import HeadlineCards from "@/components/HeadlineCards";
import Hero from "@/components/Hero";
import React from "react";

export const Home = () => {
  return (
    <>
      <Hero />
      <HeadlineCards />
      <Food />
      <Category />
    </>
  );
};
