import React from "react";

const FooterList = (props) => {
  return (
    <div className="mb-4 md:0">
      <h4 className="text-xl font-bold mb-3">{props.linkHeading}</h4>
      <ul className="text-sm md:text-base md:font-normal leading-7 font-roboto ">
        {/* { links} */}
        {props.children}
      </ul>
    </div>
  );
};

export default FooterList;
