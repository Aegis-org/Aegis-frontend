import React, { useState } from "react";

const VerifyInput = (props) => {
  const { setShowModal, setShow, testVehicleData } = props;

  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);

  let value = inputValue.toString().toLowerCase();

  const handleInput = (e) => {
    setError(false);
    setInputValue(e.target.value);
  };

  const handleVerify = (e) => {
    e.preventDefault();
    if (value === "") {
      setError(true);
      setShow(null);
      setShowModal(true);
    } else if (value === testVehicleData) {
      setShow(true);
      setShowModal(true);
      setInputValue(() => "");
    } else {
      setShow(false);
      setShowModal(true);
      setInputValue(() => "");
    }
  };

  return (
    <div className="relative">
      <div className="font-montserrart flex flex-row justify-center items-center place-content-center gap-x-4 mt-4 sm:max-w-5xl">
        <input
          type="text"
          value={inputValue}
          placeholder="Enter Vin number (Test by typing: 123456789)"
          onChange={handleInput}
          className={`rounded-lg border border-pry-clr pl-4 py-4 w-1/2 bg-transparent ${
            window.innerWidth <= 640 && "verify-input-placeholder"
          }`}
        />
        <button
          type="submit"
          onClick={handleVerify}
          className="font-semibold rounded-lg bg-pry-clr p-3"
          style={{ color: "#fff" }}
        >
          Verify car now!
        </button>
      </div>
      {error && (
        <p className="font-montserrart text-sm text-red-600 font-medium absolute -top-1/2 left-1/4">
          Please enter a valid plate number!
        </p>
      )}
    </div>
  );
};

export default VerifyInput;
