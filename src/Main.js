import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import DynamicHeader from "./components/DynamicHeader";
import BuyerDashboard from "./pages/Dashboard/BuyerDashboard/BuyerDashboard";
import SellerDashboard from "./pages/Dashboard/SellerDashboard/SellerDashboard";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import MarketGallery from "./pages/MarketGallery/MarketGallery";
import SignUp from "./pages/signup/SignUp";
import GlobalContext, {
  GlobalContextProvider,
} from "./utils/GlobalContextProvider";

const Main = () => {
  const ctx = useContext(GlobalContext);

  return (
    <GlobalContextProvider>
      <DynamicHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/gallery" element={<MarketGallery />} />

        <Route path="/buyer:id" element={<BuyerDashboard />} />
        <Route path="/seller/:id" element={<SellerDashboard />} />
      </Routes>
    </GlobalContextProvider>
  );
};

export default Main;
