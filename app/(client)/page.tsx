import Container from "@/components/Container";
import HomeBanner from "@/components/HomeBanner";
import ProductGrid from "@/components/ProductGrid";
import HomeCategories from "@/components/HomeCategories";
import React from "react";
import { getCategories } from "@/sanity/queries";
import LatestBlog from "@/components/LatestBlog";
import ContactPage from "./contact/page";
import SmallCategory from "@/components/SmallCategory";


const Home = async () => {
  const categories = await getCategories(6);

  return (
    <Container className="">
      <HomeBanner />
      <SmallCategory />
      <ProductGrid />
      <HomeCategories categories = {categories}/>
      <LatestBlog />
      <ContactPage />
    </Container>
  );
};

export default Home;
