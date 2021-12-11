import React from "react";

const SectionHeader = ({ heading, text, text1 }) => {
  return (
    <div className="font-montserrart sm:mt-28 sm:mb-14">
      <div className="flex flex-row justify-center items-center mt-10 mb-6">
        <span className="rounded-lg mr-4 w-12 h-1 bg-gray-400"></span>
        <h2 className="font-bold sm:text-2xl" style={{ color: "#291A2D" }}>
          {heading}
        </h2>
        <span className="rounded-lg ml-4 w-12 h-1 bg-gray-400"></span>
      </div>
      {(text || text1) && (
        <div className="hidden sm:block text-center text-base font-medium">
          {text ? (
            <p>
              We’ve gone round the globe to bring you the best and amazing
              features for the future safety and secuirity of your car
            </p>
          ) : (
            <p>Buy Already Verified and tested vechicles in our marketplace</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SectionHeader;
