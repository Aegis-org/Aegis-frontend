import React from "react";

const VerifyAdvert = (props) => {
  const { title, title2, subtitle, text, image } = props;

  return (
    <div
      className={`font-montserrart px-5 flex flex-col justify-center items-center ${
        title2 && "my-8 home-verify-advert"
      }`}
    >
      <div className={`flex flex-row gap-5 mt-8`}>
        <h1
          className={`font-bold ${
            title ? "text-3xl sm:font-black" : "hidden sm:block text-2xl"
          }`}
          style={{ color: "#291A2D" }}
        >
          {title ? title : title2}
        </h1>
        {image && (
          <div className="w-9 h-9">
            <img className="w-max" src={image} alt="vector car icon" />
          </div>
        )}
      </div>
      <div
        className="hidden sm:block text-center max-w-2xl mt-2"
        style={{ color: "rgba(41, 26, 45, 1)" }}
      >
        <p className={`${title2 && "max-w-sm"}`}>{text}</p>
      </div>
      <div className="hidden sm:block text-center my-4">
        <h3 className="font-bold" style={{ color: "#291A2D" }}>
          {subtitle}
        </h3>
      </div>
    </div>
  );
};

export default VerifyAdvert;
