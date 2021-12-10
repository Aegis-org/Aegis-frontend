import React from "react";

const SectionHeader = ({ heading }) => {
  return (
    <div className="font-montserrart flex flex-row justify-center items-center my-8">
      <span className="rounded-lg mr-4 w-12 h-1 bg-gray-400"></span>
      <h2 className="font-bold sm:text-2xl" style={{ color: "#291A2D" }}>
        {heading}
      </h2>
      <span className="rounded-lg ml-4 w-12 h-1 bg-gray-400"></span>
    </div>
  );
};

export default SectionHeader;
