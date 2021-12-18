import React, { useContext, useState } from "react";
import MarketGalleryCard from "../../components/MarketGalleryCard";
import { products } from "../../utils/DummyProductData";
import { FiSearch } from "react-icons/fi";
import GlobalContext from "../../utils/GlobalContextProvider";
import { Navigate } from "react-router-dom";

const initialState = {
  image: {},
  type: "",
  model: "",
  year: "",
  mileage: "",
  location: "",
  price: "",
  engineNumber: "",
  vin: "",
  fuel: "",
};

const MarketGallery = () => {
  const ctx = useContext(GlobalContext);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  if (!ctx.isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <section className="font-montserrart max-w-6xl mx-auto px-4 md:px-0 my-8">
      <form onSubmit={handleSubmit} className="relative mb-8">
        {inputValue === "" && (
          <label
            className="absolute top-1/2 left-4 transform -translate-y-1/2 font-medium"
            htmlFor="search"
          >
            Search
          </label>
        )}
        <input
          type="text"
          name="search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="border border-pry-clr rounded-lg w-full py-2 pl-4"
        />
        <button className="absolute top-1/2 right-4 transform -translate-y-1/2 text-xl font-bold text-pry-clr hover:text-pry-accent transition-colors">
          <FiSearch />
        </button>
      </form>
      <main className="border border-green-700 ">
        <section>
          {products.map((product) => {
            return (
              <div key={product.id}>
                <MarketGalleryCard products={product} />
              </div>
            );
          })}
        </section>
        <div>
          <button>View more</button>
        </div>
      </main>
    </section>
  );
};

export default MarketGallery;
