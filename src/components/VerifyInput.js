import React, { useContext, useState } from "react";
import { BsXLg } from "react-icons/bs";
import GlobalContext from "../utils/GlobalContextProvider";

const VerifyInput = (props) => {
  const ctx = useContext(GlobalContext);

  const { setShow, placeholder, inputStyles, btnStyles, cancelBtn, btn } =
    props;

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
      ctx.setShowModal(false);
    } else if (value === ctx.testVehicleData) {
      setShow(() => true);
      ctx.setShowModal(() => true);
      setInputValue(() => "");
      console.log("verified!");
    } else {
      setShow(() => false);
      ctx.setShowModal(() => true);
      setInputValue(() => "");
      console.log("Not verified!");
    }
  };

  return (
    <div className="relative">
      <form
        onSubmit={handleVerify}
        className="font-montserrart flex flex-row justify-center items-center place-content-center gap-x-4 mt-4 sm:max-w-5xl"
      >
        <div className="relative w-1/2">
          <input
            type="text"
            value={inputValue}
            placeholder={placeholder}
            onChange={handleInput}
            className={`rounded-xl border border-pry-clr w-full ${inputStyles} ${
              window.innerWidth <= 640 && "verify-input-placeholder"
            }`}
          />
          {cancelBtn && (
            <span className="absolute top-2/4 transform-gpu -translate-y-1/2 right-2 bg-red-600 rounded-full p-1 text-white text-xs sm:text-base">
              <BsXLg />
            </span>
          )}
        </div>
        <button
          type="submit"
          className={`bg-pry-clr ${btnStyles}`}
          style={{ color: "#fff" }}
        >
          {btn}
        </button>
      </form>
      {error && (
        <p className="font-montserrart text-sm text-red-600 font-medium absolute -top-1/2 left-1/4">
          Please enter a valid plate number!
        </p>
      )}
    </div>
  );
};

export default VerifyInput;
