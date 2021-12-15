import React from "react";
import { Link } from "react-router-dom";

const HomeBody = (props) => {
  const { title, title1, subtitle, text, btn, btn1, image, image1 } = props;

  return (
    <>
      <div className="  mt-8 px-5 sm:flex-row sm:items-center">
        <div className="flex">
          <div className="flex flex-col gap-y-7 font-montserrart sm:order-1">
            <h2
              className={` font-bold ${
                title
                  ? "text-4xl mt-4 sm:mt-0 sm:text-5xl sm:max-w-2xl"
                  : "text-2xl max-w-xs sm:max-w-max text-center sm:text-5xl sm:text-left"
              }`}
              style={{ color: "#291A2D" }}
            >
              {title ? title : title1}
            </h2>
            <p
              className={`text-base leading-tight font-medium sm:text-base max-w-xl sm:max-w-3xl ${
                image1 && "text-center sm:text-left"
              }`}
              style={{ color: "rgba(0, 0, 0, 0.85)" }}
            >
              {text}
            </p>
            <div className="md:flex items-center gap-x-7 mb-8 sm:mb-0">
              <p
                className="hidden sm:block mb-8 sm:mb-0 text-lg font-semibold"
                style={{ color: "#291A2D" }}
              >
                {subtitle}
              </p>
              {image ? (
                <div
                  className={`${
                    btn
                      ? "flex justify-center items-center hover:bg-purple-700 sm:block"
                      : ""
                  }`}
                >
                  <Link
                    to="/signup"
                    className={`text-sm font-semibold rounded-xl p-4 bg-pry-clr hover:bg-purple-800`}
                    style={{ color: "#fff" }}
                  >
                    {btn ? btn : btn1}
                  </Link>
                </div>
              ) : (
                <Link
                  to="/signup"
                  className={`flex justify-center items-center mx-16 sm:block sm:mx-0 text-sm font-semibold rounded-xl p-4 bg-pry-clr hover:bg-purple-800`}
                  style={{ color: "#fff" }}
                >
                  {btn ? btn : btn1}
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col justify-center px-8 sm:px-0 sm:w-auto sm:order-2">
          <div
            className={`w-full h-full ${
              image1
                ? "flex flex-row items-center justify-between"
                : "sm:w-full"
            }`}
          >
            {image ? (
              <img src={image} alt="hero car" className="w-full h-full" />
            ) : (
              <div className="homebody-img-wrapper">
                <img
                  src={image1}
                  alt="sports car"
                  className=" w-full h-full homebody-img"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBody;
