import React, { useContext } from "react";
import Car from "../../assets/vector-car.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { TextFields } from "../../components/TextFields";
import * as Yup from "yup";
import { Link, Navigate, useNavigate } from "react-router-dom";
import GlobalContext from "../../utils/GlobalContextProvider";

const SignUp = () => {
  const ctx = useContext(GlobalContext);
  const navigate = useNavigate();

  const onFormSubmit = async (values) => {
    console.log(values);
    const data = Object.entries(values);
    // remove comfirm password data
    data.pop();

    const inputValue = Object.fromEntries(data);

    let response = await fetch(
      "https://aigis-backend-api.herokuapp.com/api/users/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputValue),
      }
    );
    if (response.status === 200) {
      response = await response.json();
      response = console.log(response);
      navigate("/login");
      return <Navigate to="/login" />;
    } else {
      console.log("error", response.statusText);
    }
  };

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
  return (
    <div className="bg-pry-accent  font-montserrart py-20">
      <div className="w-full  md:max-w-screen-sm mx-auto">
        <div className="flex  justify-center mb-6 px-5 text-pry-clr">
          <h1 className="text-2xl md:text-3xl text-white font-montserrart font-bold  ">
            Kickstart your car Protection journey
          </h1>
          <img src={Car} alt="car" className="w-12 ml-0 md:w-13 md:ml-4" />
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
              username: "",
              phoneNumber: "",
              email: "",
              password: "",
              comfirmPassword: "",
            }}
            onSubmit={onFormSubmit}
            validationSchema={validation}
          >
            {(formik) => {
              return (
                <Form>
                  <TextFields name="firstName" label="FirstName:" type="text" />
                  <TextFields name="lastName" label="LastName:" type="text" />
                  <TextFields name="username" label="Username:" type="text" />
                  <TextFields name="email" label="Email:" type="email" />
                  <TextFields
                    name="phoneNumber"
                    label="Phone Number:"
                    type="tel"
                  />
                  <TextFields
                    name="password"
                    label="Password:"
                    type="password"
                  />
                  <TextFields
                    name="comfirmPassword"
                    label="Comfirm Password:"
                    type="password"
                  />

                  <p className="text-center text-gray-color font-bold text-base md:text-xl">
                    Already have an account{" "}
                    <span className="text-pry-clr">
                      <Link to="/login" className="hover:underline">
                        Sign in
                      </Link>
                    </span>
                  </p>

                  <button
                    type="submit"
                    className="bg-pry-clr  py-3 p-6 w-full text-white rounded-xl mt-11 text-xl md:text-xl font-bold opacity-100 disabled:opacity-50 transition-all duration-300"
                  >
                    Create Account
                  </button>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
