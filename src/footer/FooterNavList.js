import React from "react";

const FooterList = (props) => {
  return (
    <div className="mb-4 md:0">
      <h4 className="text-2xl font-bold">{props.linkHeading}</h4>
      <ul className="font-normal leading-7 font-roboto">
        {/* { links} */}
        {props.children}
      </ul>
    </div>
  );
};

export default FooterList;
