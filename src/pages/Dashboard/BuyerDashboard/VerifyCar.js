import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const VerifyCar = (props) => {
  const { showVerifyCar, setShowVerifyCar, message } = props;

  return (
    <div className="border border-pry-clr w-max px-4 py-6 mt-4 rounded-lg bg-gray-200 lg:ml-20">
      {showVerifyCar.show && (
        <div className="flex items-center gap-y-4 gap-x-4 mb-4">
          <div className="font-bold">{message}</div>
          <button
            className="bg-red-600 text-white rounded-full text-xl"
            onClick={() => setShowVerifyCar({ ...showVerifyCar, show: false })}
          >
            <AiOutlineCloseCircle />
          </button>
        </div>
      )}

      {showVerifyCar.verified && (
        <div className="text-pry-clr w-max">
          <div className="flex justify-center font-medium mb-2 items-center">
            <p>Vehicle details</p>
          </div>
          <div className="flex justify-between gap-x-4 font-medium mb-2">
            <p className="font-normal">Vehicle number:</p>
            <p>1234534829</p>
          </div>
          <div className="flex justify-between gap-x-4 font-medium mb-2">
            <p className="font-normal">Vehicle color:</p>
            <p>Red</p>
          </div>
          <div className="flex justify-between gap-x-4 font-medium mb-2">
            <p className="font-normal">Vehicle name:</p>
            <p>Toyota</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default VerifyCar;
