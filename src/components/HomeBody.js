import React from "react";
import { Link } from "react-router-dom";

import heroImg from "../assets/hero-img-carverify.png";

const HomeBody = () => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-y-7 font-roboto">
        <h2 className="text-6xl font-bold" style={{ color: "#291A2D" }}>
          Car Identity Verification Made Easy
        </h2>
        <p
          className="text-lg max-w-xl"
          style={{ color: "rgba(171, 151, 175, 1)" }}
        >
          It is a fact that about eighty percent of vehicles stolen from people
          end up with innocent car buyers and sellers. This service helps
          protect you from the dangers of inadvertently buying these stolen
          vehicles which will not only get you into trouble with Law
          Enforcement, but also make you lose resources spent on buying the
          vehicle
        </p>
        <div className="flex items-center gap-x-7">
          <p className="text-lg font-semibold" style={{ color: "#291A2D" }}>
            Start Using Aegis App Today
          </p>
          <Link
            to="/signup"
            className="text-sm font-semibold rounded-xl p-4"
            style={{ color: "#fff", backgroundColor: "#291A2D" }}
          >
            Sign Up For Free
          </Link>
        </div>
      </div>
      <div>
        <img src={heroImg} alt="hero car" />
      </div>
    </div>
  );
};

export default HomeBody;
