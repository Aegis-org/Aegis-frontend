import React, { useState } from "react";
import GalleryCard from "./GalleryCard";
import { BiChevronRightCircle, BiChevronLeftCircle } from "react-icons/bi";

const Carousel = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const length = data.length;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
  };
  console.log(currentSlide);

  if (!Array.isArray(data) || data.length <= 0) {
    return null;
  }

  return (
    <section className="overflow-hidden w-max">
      <section className="sm:flex sm:gap-x-4 sm:items-center sm:justify-between">
        {data.map((datum, index) => {
          if (window.innerWidth <= 640) {
            return (
              <div key={index}>
                {index === currentSlide && <GalleryCard products={datum} />}
              </div>
            );
          } else {
            return (
              <div key={index}>
                {(index === currentSlide || index === currentSlide + 1) && (
                  <GalleryCard products={datum} />
                )}
              </div>
            );
          }
        })}
      </section>
      <div
        className="flex justify-center items-center gap-x-12 z-10 select-none"
        style={{ color: "#291A2D" }}
      >
        <BiChevronLeftCircle
          className="text-4xl sm:text-6xl cursor-pointer hover:text-pry-accent"
          onClick={prevSlide}
        />
        <BiChevronRightCircle
          className="text-4xl sm:text-6xl cursor-pointer hover:text-pry-accent"
          onClick={nextSlide}
        />
      </div>
    </section>
  );
};

export default Carousel;
