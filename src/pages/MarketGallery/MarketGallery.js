import React from "react";
import MarketGalleryCard from "../../components/MarketGalleryCard";
import { products } from "../../utils/DummyProductData";

const MarketGallery = () => {
  return (
    <div className="font-montserrart">
      <MarketGalleryCard
        name={products[4].name}
        image={products[4].image}
        imgAlt={products[4].imgAlt}
        type={products[4].type}
        price={products[4].price}
        year={products[4].year}
        bodyType={products[4].bodyType}
        fuel={products[4].fuel}
      />
    </div>
  );
};

export default MarketGallery;
