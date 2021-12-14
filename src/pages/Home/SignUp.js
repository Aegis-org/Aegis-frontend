import React from "react";
import Car from "../../assets/vector-car.png";
import { Formik, Form } from "formik";
import { TextFields } from "../../components/TextFields";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const SignUp = () => {
  const validation = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("This field is required"),
    lastName: Yup.string()
      .max(20, "Must be 15 characters or less")
      .required("This field is required"),
    phoneNumber: Yup.number().required("This field is required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    comfirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "password must match")
      .required("Comfirm password is required"),
  });
  const onFormSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className="bg-pry-accent  font-montserrart py-20">
      <div className="w-full  md:max-w-screen-md mx-auto">
        <div className="flex  justify-center mb-6 px-5 text-pry-clr">
          <h1 className="text-2xl md:text-3xl text-white font-montserrart font-bold  ">
            Kickstart your car Protection journey
          </h1>
          <img src={Car} alt="car" className="w-12 ml-0 md:w-9 md:ml-4" />
        </div>
        <div className=" bg-white p-5 md:px-8 md:py-14 border-2 border-black border-opacity-50 rounded-xl shadow-lg">
          <div className="mb-11">
            <h3 className=" text-xl md:text-3xl font-bold ">
              Get your car secured in few steps
            </h3>
            <span className="text-base md:text-xl ">
              Kindly fill in your details correctly to get started
            </span>
          </div>

          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              phoneNumber: "",
              email: "",
              password: "",
              comfirmPassword: "",
            }}
            onSubmit={onFormSubmit}
            validationSchema={validation}
          >
            {(formik) => (
              <div>
                <Form>
                  <TextFields
                    label="First Name:"
                    name="firstName"
                    type="text"
                  />
                  <TextFields label="Last Name:" name="lastName" type="text" />

                  <TextFields
                    label="Phone Number:"
                    name="phoneNumber"
                    type="number"
                  />
                  <TextFields
                    label="Email Address:"
                    name="email"
                    type="email"
                  />
                  <TextFields
                    label="Password:"
                    name="password"
                    type="password"
                  />
                  <TextFields
                    label="Confirm Password:"
                    name="comfirmPassword"
                    type="password"
                  />
                  <p className="text-center text-gray-color font-bold text-base md:text-xl">
                    Already have an account{" "}
                    <span className="text-pry-clr">
                      <Link to="/signin">Sign in</Link>
                    </span>
                  </p>
                  <button
                    type="submit"
                    className="bg-pry-clr  py-3 p-6 w-full text-white rounded-xl mt-11 text-xl md:text-xl font-bold "
                  >
                    Create Account
                  </button>
                </Form>
              </div>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
