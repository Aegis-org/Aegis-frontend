import React, { useContext, useState } from "react";
import MarketGalleryCard from "../../components/MarketGalleryCard";
import { products } from "../../utils/DummyProductData";
import { FiSearch } from "react-icons/fi";
import GlobalContext from "../../utils/GlobalContextProvider";
import { Navigate } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";

const MarketGallery = () => {
  const ctx = useContext(GlobalContext);
  const [productInfo, setProductInfo] = useState({
    mileage: "",
    location: "",
    color: "",
    vinNumber: "",
  });

  const [inputValue, setInputValue] = useState("");
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const showMoreModal = (mileage, location, color, vinNumber, id) => {
    setProductInfo({
      ...productInfo,
      mileage: mileage,
      location: location,
      color: color,
      vinNumber: vinNumber,
    });

    setShow(!show);
    console.log(productInfo, id);
  };

  if (!ctx.isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <section className="font-montserrart max-w-6xl mx-auto px-4 md:px-0 my-8">
      <form
        onSubmit={handleSubmit}
        className="relative mb-8 md:mx-4 overflow-hidden"
      >
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
          className="border border-pry-clr rounded-lg w-full py-2 pl-4 outline-black"
        />
        <button className="absolute top-1/2 right-0 rounded-r-lg transform -translate-y-1/2 text-xl font-bold text-white hover:text-pry-clr hover:bg-pry-accent transition-colors bg-red-600 py-3 px-4">
          <FiSearch />
        </button>
      </form>
      <main className="">
        <section className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-8 md:mx-4 justify-center gap-y-16">
          {products.map((product) => {
            return (
              <div key={product.id}>
                <MarketGalleryCard
                  products={product}
                  btn="See more details"
                  func={showMoreModal}
                />
              </div>
            );
          })}
          {show && (
            <div
              className="fixed top-0 left-0 w-full h-full z-20"
              style={{ background: "rgba(0, 0, 0, 0.6)" }}
            >
              <Modal productInfo={productInfo} setShow={setShow} />
            </div>
          )}
        </section>
        <div className="flex justify-center items-center my-12">
          <button className="bg-pry-clr text-white px-8 py-2 rounded-lg font-medium hover:bg-pry-accent hover:text-pry-clr transition-colors">
            View more
          </button>
        </div>
      </main>
    </section>
  );
};

const Modal = ({ productInfo, setShow }) => {
  return (
    <div className="absolute top-0 left-1/2 transform -translate-y-2/2 w-max -translate-x-1/2">
      <div className="flex flex-col justify-start pt-4 gap-y-8 px-4 bg-pry-accent rounded-2xl h-min">
        <button onClick={() => setShow(false)}>
          <span className="ml-auto mr-4 text-red-500 text-4xl w-min">
            <AiFillCloseCircle />
          </span>
        </button>
        <div className="flex justify-between p-4 text-pry-clr font-semibold">
          <p className="font-bold">Location:</p>
          <p className="bg-white rounded-md w-40 text-center">
            {productInfo.location}
          </p>
        </div>
        <div className="flex justify-between p-4 text-pry-clr font-semibold">
          <p className="font-bold">Vin Number:</p>
          <p className="bg-white rounded-md w-40 text-center">
            {productInfo.vinNumber}
          </p>
        </div>
        <div className="flex justify-between p-4 text-pry-clr font-semibold">
          <p className="font-bold">Color:</p>
          <p className="bg-white rounded-md w-40 text-center">
            {productInfo.color}
          </p>
        </div>
        <div className="flex justify-between p-4 text-pry-clr font-semibold">
          <p className="font-bold">Mileage:</p>
          <p className="bg-white rounded-md w-40 text-center">
            {productInfo.mileage}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MarketGallery;
