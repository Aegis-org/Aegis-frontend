import React, { useContext } from "react";
import GlobalContext from "../../../utils/GlobalContextProvider";

const BuyerDashboard = () => {
  const ctx = useContext(GlobalContext);

  return (
    <>
      <section className="wrapper max-w-6xl mx-auto mt-8 px-3 sm:px-0 border border-red-600">
        <div className="LHS-content">
          <div className="Input-field">
            <h4 className="text-pry-clr font-semibold">Vin Number</h4>
            <div className="border border-green-600">input</div>
          </div>
          <div className="Gallery"></div>
          <div className="btn">
            <button>View more in Gallery</button>
          </div>
        </div>
        <aside className="RHS-content"></aside>
      </section>
    </>
  );
};

export default BuyerDashboard;
