import React from "react";

const GalleryCard = ({ product }) => {
  const { image, model, price } = product;
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
      <button
        type="submit"
        className="bg-pry-clr px-16 py-2 rounded-full font-bold mb-4"
        style={{ color: "white" }}
      >
        Buy
      </button>
    </div>
  );
};

export default GalleryCard;
