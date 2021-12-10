import React from "react";

const VerifyInput = () => {
  return (
    <div className="font-montserrart flex flex-row justify-center items-center place-content-center gap-x-4 mt-4 sm:max-w-5xl">
      <input
        type="text"
        placeholder="Enter vin number"
        className="rounded-lg border border-pry-clr pl-4 py-4 w-1/2 bg-transparent "
      />
      <button
        type="submit"
        className="font-semibold rounded-lg bg-pry-clr p-3"
        style={{ color: "#fff" }}
      >
        Verify car now!
      </button>
    </div>
  );
};

export default VerifyInput;
