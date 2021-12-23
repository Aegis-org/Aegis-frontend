import React, { useContext } from "react";

import { FiThumbsUp } from "react-icons/fi";
import { useState } from "react/cjs/react.development";

import GlobalContext from "../utils/GlobalContextProvider";

const editProfileValidate = (value) => {
  let errors = {};

  if (!value.bvn) {
    errors.bvn = "BVN is required!";
  } else if (value.bvn.length < 11 || value.bvn.length > 11) {
    errors.bvn = "BVN must be 11 numbers!";
  } else {
    errors.bvn = false;
  }

  if (!value.nin) {
    errors.nin = "NIN is required!";
  } else if (value.nin.length < 11 || value.nin.length > 11) {
    errors.nin = "NIN must be 11 numbers!";
  }

  return errors;
};

const initialValues = {
  bvn: "",
  nin: "",
  nok: "",
};

const EditProfile = ({ setEditProfile }) => {
  const ctx = useContext(GlobalContext);

  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [verified, setVerified] = useState(false);

  const handleInput = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({});
    console.log(values);
    console.log(ctx.userInfo._id);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(editProfileValidate(values));

    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nok: values.nok,
        nin: values.nin,
        bvn: values.bvn,
        id: ctx.userInfo._id,
      }),
      redirect: "follow",
    };

    let response = await fetch(
      "https://aigis-backend-api.herokuapp.com/api/users/edit",
      requestOptions
    );

    response = await response.json();

    if (response.verified) {
      setVerified(true);
      setTimeout(() => {
        setEditProfile(false);
      }, 5000);
      console.log(response.message);
    } else {
      console.log(response.message);
      console.log(requestOptions);
    }
  };

  return (
    <div className="font-montserrart border border-pry-clr rounded-lg px-2 sm:px-0 py-4 flex flex-col transition-all">
      {verified && (
        <div className="sm:flex justify-center items-center  gap-x-4 text-center text-pry-clr font-medium mb-4">
          Verification successful! <br /> Profile details Updated Successfully!
        </div>
      )}
      {!verified && (
        <form className="" onSubmit={handleSubmit}>
          {errors.bvn && (
            <div className="text-red-600 text-sm font-medium text-center">
              {errors.bvn}
            </div>
          )}
          <div className="flex sm:flex-col items-center justify-between mb-8 sm:mb-4">
            <label htmlFor="bvn" className="font-semibold text-pry-clr">
              BVN
            </label>
            <input
              type="text"
              placeholder="54651333604"
              name="bvn"
              onChange={handleInput}
              className="border border-pry-clr rounded-md px-2 py-2 w-4/5"
            />
          </div>
          {errors.nin && (
            <div className="text-red-600 text-sm font-medium text-center">
              {errors.nin}
            </div>
          )}
          <div className="flex sm:flex-col items-center justify-between mb-8 sm:mb-4">
            <label htmlFor="nin" className="font-semibold text-pry-clr">
              NIN
            </label>
            <input
              type="text"
              placeholder="12345678909"
              name="nin"
              onChange={handleInput}
              className="border border-pry-clr rounded-md px-2 py-2 w-4/5"
            />
          </div>
          <div className="flex sm:flex-col items-center justify-between mb-8">
            <label htmlFor="nok" className="font-semibold text-pry-clr">
              Next of Kin
            </label>
            <input
              type="text"
              placeholder="next of kin's name"
              name="nok"
              onChange={handleInput}
              className="border border-pry-clr rounded-md px-2 py-2 w-4/5"
            />
          </div>
          <button
            type="submit"
            className="flex justify-center items-center text-center text-white bg-pry-clr rounded-md py-2 w-3/4 mx-auto font-semibold gap-x-2 hover:bg-pry-accent hover:text-pry-clr transition-colors"
          >
            All set
            <span>
              <FiThumbsUp />
            </span>
          </button>
        </form>
      )}
    </div>
  );
};

export default EditProfile;
