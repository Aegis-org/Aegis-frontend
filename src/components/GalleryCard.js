import React from "react";
import { Link } from "react-router-dom";

const GalleryCard = ({ products }) => {
  const { image, model, price } = products;
  return (
    <div className="flex flex-col justify-between items-center rounded-3xl py-2 px-4 max-w-xs shadow-xl mb-8 border border-pry-accent hover:bg-gray-200">
      <figure
        className="bg-gray-200 rounded-3xl w-full
      "
      >
        <img src={image} alt={model} className="w-full" />
      </figure>
      <div className="flex gap-x-4 my-8 font-bold">
        <div className="border-2 border-pry-accent rounded-full px-6 py-1">
          {model}
        </div>
        <div className="border-2 border-pry-accent rounded-full px-6 py-1">
          {price}
        </div>
      </div>
      <Link
        to="/login"
        className="bg-pry-clr px-16 py-2 rounded-full font-bold mb-4 text-white hover:text-pry-clr hover:bg-transparent border-2 border-pry-clr hover:border-pry-accent"
      >
        Buy
      </Link>
    </div>
  );
};

export default GalleryCard;
