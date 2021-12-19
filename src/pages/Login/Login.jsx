import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import car from "../../assets/signup-vector-car.png";
import GlobalContext from "../../utils/GlobalContextProvider";
import Loginvalidate from "./Loginvalidate";

const Login = () => {
  const user = useContext(GlobalContext);
  const navigate = useNavigate();

  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setValue({
      ...value,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Loginvalidate(value));

    user.onLogin(value.email, value.password);
  };

  useEffect(() => {
    if (user.isLoggedIn && user.userInfo._id) {
      navigate(
        `/${user.userInfo.isSeller ? "seller" : "buyer"}/${user.userInfo._id}`
      );
    }
  }, [user, navigate]);

  return (
    <div className="bg-fade-bg p-8 max-w-6xl mx-auto bg-pry-accent grid justify-center">
      <div className="flex flex-row mt-4 justify-center items-center sm-w-24 text-center mb-6">
        <h5 className="text-pry-clr text-xl mr-6 font-bold ">
          Kickstart your car Protection journey
        </h5>
        <img src={car} className="object-scale-down" alt="vector car" />
      </div>
      <div className="border-2 bg-white rounded-md border-pry-clr max-h-screen mb-24 p-6 sm:w-2/3 lg-w-56 md:mx-32 mx-12">
        <h3 className="text-pry-clr my-2 font-bold">
          Welcome Back &#10095; &#10095; &#10095;
        </h3>
        <p className="text-black font-normal text-sm">
          Kindly fill in your details correctly to login
        </p>
        <form onSubmit={handleSubmit} method="post" className="mt-20">
          <div className="flex flex-row mt-10 mr-auto gap-x-8">
            <label
              htmlFor="Email Address:"
              className="text-pry-clr font-bold w-1/3"
            >
              Email Address/Username:
            </label>
            <input
              type="email"
              className="border-2 p-2 text-black rounded-md border-pry-clr hover:bg-pry-accent w-2/3 transition-colors"
              name="email"
              id=""
              value={value.email}
              onChange={handleChange}
              placeholder="Example@mail.com"
            />
          </div>
          <div className="flex justify-end">
            {errors.email && (
              <p className="text-red-700 block">{errors.email}</p>
            )}
            {user.login.error && (
              <p className="text-red-700 block">
                Invalid Email/Username/Password
              </p>
            )}
          </div>
          <div className="flex flex-row mt-10 mr-auto gap-x-8">
            <label
              htmlFor="Password:"
              required={true}
              className="text-pry-clr font-bold w-1/3"
            >
              Password:
            </label>
            <input
              type="password"
              className="border-2 p-2 text-black w-2/3 border-pry-clr rounded-md hover:bg-pry-accent transition-colors"
              name="password"
              id=""
              value={value.password}
              onChange={handleChange}
              placeholder="**********"
            />
          </div>
          <div className="flex justify-end  sm:justify-right">
            {errors.password && (
              <p className="text-red-700 block">{errors.password}</p>
            )}
          </div>
          <div className="my-8 flex justify-end">
            <Link to="/" className="font-medium button text-sm ">
              Forgot Password?
            </Link>
          </div>
          <div className="text-center">
            <button
              type="submit"
              onClick={handleSubmit}
              className="font-bold text-center cursor-pointer mt-4 hover:bg-pry-accent mb-6 text-white rounded-lg p-2 bg-pry-clr w-4/6 transition-colors"
            >
              {!user.userInfo.isLoggedIn &&
              user.login.loading &&
              !user.login.error
                ? "Logging In"
                : "Login"}
            </button>
          </div>
        </form>
        <div className="text-center text-gray mb-20">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="hover:underline font-bold text-pry-clr "
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
