import React from "react";

const MarketGalleryCard = ({ products, btn, func }) => {
  const {
    id,
    name,
    image,
    imgAlt,
    type,
    price,
    year,
    bodyType,
    fuel,
    mileage,
    location,
    color,
    vinNumber,
  } = products;

  return (
    <>
      <div
        // key={id}
        className="flex flex-col justify-center bg-pry-clr text-white p-4 rounded-2xl max-w-xs sm:max-w-md"
      >
        <div className="text-center font-medium mb-4">
          <h4>{name}</h4>
        </div>
        <figure className="flex justify-center items-center">
          <img src={image} alt={imgAlt} />
        </figure>
        <div className="py-4 car-details">
          <div className="flex justify-around items-center font-semibold">
            <p className="">{type}</p>
            <p className="">{price}</p>
          </div>
          <div className="flex justify-around mt-8">
            <div className="flex flex-col justify-center items-center gap-y-3">
              <p className="font-medium">Year</p>
              <p className="text-pry-clr bg-white px-4 font-medium rounded-full">
                {year}
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-y-3">
              <p className="font-medium">Body Type</p>
              <p className="text-pry-clr bg-white px-4 font-medium rounded-full">
                {bodyType}
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-y-3">
              <p className="font-medium">Fuel</p>
              <p className="text-pry-clr bg-white px-4 font-medium rounded-full">
                {fuel}
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-2">
          <button
            type="submit"
            onClick={
              btn && (() => func(mileage, location, color, vinNumber, id))
            }
            className="font-semibold bg-white text-pry-clr px-8 py-1 sm:px-12 hover:bg-pry-accent rounded-full transition-colors"
          >
            {btn ? btn : "Buy"}
          </button>
        </div>
      </div>
    </>
  );
};

export default MarketGalleryCard;
