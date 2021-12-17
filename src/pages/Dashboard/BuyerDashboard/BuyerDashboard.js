import React, { useContext, useState } from "react";
import GlobalContext from "../../../utils/GlobalContextProvider";

import { BsXLg } from "react-icons/bs";
import { products } from "../../../utils/DummyProductData";
import MarketGalleryCard from "../../../components/MarketGalleryCard";

const BuyerDashboard = () => {
  const ctx = useContext(GlobalContext);
  const [value, setValue] = useState("");

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleVerify = (e) => {
    e.preventDefault();
    setValue(() => "");
  };

  return (
    <>
      <section className="wrapper max-w-6xl mx-auto mt-8 px-3 sm:px-0 border border-red-600">
        <div className="LHS-content">
          <div className="Input-field">
            <h4 className="text-pry-clr font-semibold sm:font-bold">
              Vin Number
            </h4>
            <form
              onSubmit={handleVerify}
              className="inline-flex w-full gap-x-4 mt-3"
            >
              <div className="inline-flex w-4/12 relative">
                <label
                  htmlFor="text"
                  onClick={() => setValue("")}
                  className="absolute right-3 bg-red-600 text-white top-1/2 transform -translate-y-1/2 rounded-full p-1 text-sm cursor-pointer"
                >
                  <BsXLg />
                </label>
                <input
                  type="text"
                  value={value}
                  onChange={handleInput}
                  placeholder="4Y1SL65848Z411439"
                  className="bg-pry-accent py-1 sm:py-2 pl-4 rounded-xl w-full"
                />
              </div>
              <button className="bg-pry-clr text-white px-6 sm:px-12 rounded-xl">
                Verify
              </button>
            </form>
          </div>
          <div className="Gallery border border-green-500 grid justify-center items-center my-6 sm:mt-16 gap-y-6 sm:grid-cols-2">
            {products.slice(0, 4).map((product) => {
              return (
                <div className="" key={product.id}>
                  <MarketGalleryCard products={product} />
                </div>
              );
            })}
          </div>
          <div className="mb-8 sm:my-20 text-center">
            <button className="text-pry-clr font-semibold sm:font-bold bg-pry-accent px-4 py-2 rounded-xl">
              View more in Gallery
            </button>
          </div>
        </div>
        <aside className="RHS-content hidden sm:block"></aside>
      </section>
    </>
  );
};

export default BuyerDashboard;
