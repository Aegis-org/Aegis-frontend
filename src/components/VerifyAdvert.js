import React from "react";

const VerifyAdvert = (props) => {
  const { title, subtitle, text, image } = props;

  return (
    <div>
      <div>
        <h1>{title}</h1>
        {image && (
          <div>
            <img src={image} alt="vector car icon" />
          </div>
        )}
        <div>
          <p>{text}</p>
        </div>
        <div>
          <h3>{subtitle}</h3>
        </div>
      </div>
    </div>
  );
};

export default VerifyAdvert;
