import React from "react";

export const CarouselItem = ({ childern, width }) => {
  return (
    <div
      className="inline-flex items-center justify-center h-52 bg-pry-clr"
      style={{ width: width, color: "#fff" }}
    >
      {childern}
    </div>
  );
};

const Carousel = ({ children }) => {
  return (
    <div className="overflow-hidden">
      <div
        className="whitespace-nowrap "
        style={{ transform: "translateX(-0%" }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
    </div>
  );
};

export default Carousel;
