import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { handleAddToCart, handleAddToWish } from "./ProductDetail/helperCart";
import Header from "../../component/Header/Header";
import HeroSection from "../../component/herosection/HeroSection";
import ProductFilterSection from "../../component/products/ProductFilterSection";
import ReviewSection from "../../component/review/ReviewSection";
import BrandsSection from "../../component/brand/BrandsSection";
import Footer from "../../component/footer/Footer";


const Homepage = () => {

  const [bestSellers, setBestSellers] = useState([]);
  const [bigDiscount, setBigDiscount] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);


  const fatch = async () => {
    try {
      const response = await fetch("http://localhost:5200/products/all");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setBestSellers(data.message.fontdata.bestSellers);

      setBigDiscount(data.message.fontdata.bigDiscount);
      setNewArrivals(data.message.fontdata.newArrivals);
    } catch (error) {
      throw new Error("response not come form backend");

    }
  };



  // Add to wish list 





  useEffect(() => {
    fatch();
  }, []);


  return (
    <>
      <HeroSection />
      <ProductFilterSection
        bestSellers={bestSellers}
        bigDiscount={bigDiscount}
        newArrivals={newArrivals}
        handleAddToWish={handleAddToWish}
        handleAddToCart={handleAddToCart} />
      <ReviewSection />
      <BrandsSection />
    </>
  );
};

export default Homepage;
