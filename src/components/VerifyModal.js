import React from "react";
import { BsXCircleFill } from "react-icons/bs";

const VerifyModal = (props) => {
  const {
    title,
    smiley,
    message,
    btn,
    image,
    imgAlt,
    showModal,
    handleClose,
    doSomething,
  } = props;

  return (
    <>
      {showModal && (
        <div
          className="fixed top-0 left-0 w-full h-full z-20"
          style={{ background: "rgba(0, 0, 0, 0.6)" }}
        >
          <div className="font-montserrart flex flex-col items-center border-2 border-pry-clr rounded-xl p-4 outline-none sm:w-1/2 w-2/3 sm:h-4/5 mx-auto shadow-lg bg-white fixed top-32 left-1/4 sm:top-12 sm:left-1/4 overflow-hidden z-50">
            <div className="">
              <h4 className="text-pry-clr font-medium sm:font-bold text-center break-words px-8 sm:px-0">
                {title}
              </h4>
              <button
                onClick={handleClose}
                className="text-pry-clr text-3xl sm:text-4xl absolute top-4 right-4 z-10 hover:text-red-600"
              >
                <BsXCircleFill />
              </button>
            </div>
            {(smiley || message) && (
              <div className="flex items-center justify-center my-8 sm:my-12 gap-x-4">
                <figure className="w-10 h-10">
                  <img src={smiley} alt={smiley && "smiley"} />
                </figure>
                <p className="sm:font-semibold text-pry-clr">{message}</p>
              </div>
            )}

            <figure className="mb-4 max-h-96 ">
              <img className="h-full w-full" src={image} alt={imgAlt} />
            </figure>
            {btn && (
              <button
                onClick={doSomething}
                className="bg-pry-clr text-white font-medium px-20 py-3 rounded-2xl hover:text-pry-clr hover:bg-pry-accent"
              >
                {btn}
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default VerifyModal;
