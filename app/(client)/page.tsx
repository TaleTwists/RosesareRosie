import Container from "@/components/Container";
import HomeBanner from "@/components/HomeBanner";
import ProductGrid from "@/components/ProductGrid";
import HomeCategories from "@/components/HomeCategories";
import React from "react";

const Home = () => {
  return (
    <Container className="">
      <HomeBanner />
      <ProductGrid />
      <HomeCategories />
    </Container>
  );
};

export default Home;
