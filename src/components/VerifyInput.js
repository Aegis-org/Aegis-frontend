import React, { useContext, useState } from "react";
import { BsXLg } from "react-icons/bs";
import GlobalContext from "../utils/GlobalContextProvider";

const VerifyInput = (props) => {
  const ctx = useContext(GlobalContext);

  const { setShow, placeholder, inputStyles, btnStyles, cancelBtn, btn } =
    props;

  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState({ error: false, loading: false });

  let value = inputValue.toString().toLowerCase();

  const handleInput = (e) => {
    setError({ ...error, error: false, loading: false });
    setInputValue(e.target.value);
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    setError({ ...error, error: false, loading: true });
    let url =
      "https://aigis-backend-api.herokuapp.com/api/users/vehicles/verify";

    let options = {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=UTF-8" },
      body: JSON.stringify({ vin: value }),
    };

    if (value === "") {
      setError({ ...error, error: true, loading: false });
      ctx.setShowModal(false);
    } else {
      let response = await fetch(url, options);

      if (response.status === 200) {
        setError({ ...error, loading: false });
        console.log(response.statusText);
        response = await response.json();
        if (!response.status) {
          console.log(response.status);
          setShow(() => false);
          ctx.setShowModal(() => true);
          setInputValue(() => "");
          console.log("Not verified!");
        } else {
          console.log(response.status);
          setShow(() => true);
          ctx.setShowModal(() => true);
          setInputValue(() => "");
          console.log("verified!");
        }
      } else {
        console.log(response.status);
      }
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
      {(error.error || error.loading) && (
        <p
          className={`font-montserrart absolute -top-1/2 ${
            error.loading
              ? "font-semibold text-lg text-pry-clr left-44"
              : "font-medium text-red-600 text-sm left-1/4"
          }`}
        >
          {error.error
            ? "Please enter a valid plate number!"
            : error.loading
            ? "Please wait ...."
            : ""}
        </p>
      )}
    </div>
  );
};

export default VerifyInput;
