import React from "react";
import "./BrandsSection.css";

const brands = [
  "/imagesss/nikelogo.png",
  "/imagesss/pumalogos.png",
  "/imagesss/adidaslogo.png",
  "/imagesss/jordanlogo.png",
  "/imagesss/gucci.jpg",
];

const BrandsSection = () => {
  return (
    <section className="brands-section">
      <div className="brands-track">
        {brands.concat(brands).map((logo, index) => (
          <img key={index} src={logo} alt="brand logo" />
        ))}
      </div>
    </section>
  );
};

export default BrandsSection;
