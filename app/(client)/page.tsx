import Container from "@/components/Container";
import HomeBanner from "@/components/HomeBanner";
import ProductGrid from "@/components/ProductGrid";
import HomeCategories from "@/components/HomeCategories";
import React from "react";
import { getCategories } from "@/sanity/queries";
import ShopByBrands from "@/components/ShopByBrands";
import LatestBlog from "@/components/LatestBlog";
import FaqPage from "./faqs/page";

const Home = async () => {
  const categories = await getCategories(6);

  return (
    <Container className="">
      <HomeBanner />
      <ProductGrid />
      <HomeCategories categories = {categories}/>
      <ShopByBrands />
      <LatestBlog />
      <FaqPage />
    </Container>
  );
};

export default Home;
