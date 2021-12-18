import React, { useContext } from "react";
import MarketGalleryCard from "../../components/MarketGalleryCard";
import { products } from "../../utils/DummyProductData";
import { FiSearch } from "react-icons/fi";
import GlobalContext from "../../utils/GlobalContextProvider";
import { Navigate } from "react-router-dom";

const MarketGallery = () => {
  const ctx = useContext(GlobalContext);

  if (!ctx.isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <section className="font-montserrart max-w-6xl mx-auto px-4 md:px-0">
      <form>
        <label htmlFor="search">Search</label>
        <input type="text" name="search" value={""} onChange={""} />
        <button>
          <FiSearch />
        </button>
      </form>
      <main>
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
