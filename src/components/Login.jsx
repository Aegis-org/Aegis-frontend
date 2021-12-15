import React, {useState} from 'react';
// import { FaGreaterThan } from "react-icons/fa";
import { Link } from "react-router-dom";
import car from '../assets/signup-vector-car.png';
import Loginvalidate from './Loginvalidate';

const Login = () => {
    const [value, setValue] = useState({
        email:"",
        password:"",
    });
    
    const [errors, setErrors] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Loginvalidate(value));
    };

    const handleChange = (event) => {
        setValue({
            ...value,
            [event.target.name]: event.target.value,
        })
    };

    return (
        <div className="bg-fade-bg p-4">
            <div className="flex flex-row mt-4 justify-center sm-w-24 text-center mb-6">
                <h5 className="text-white text-xl mr-6 font-bold ">
                    Kickstart your car Protection journey
                </h5>
                <img src={car} className="object-scale-down w-least md:w-leas" alt="vector car" srcset=""/>
            </div>
            <div className="border-2 bg-white rounded-md border-pry-clr max-h-screen mb-24 p-6 lg-w-56 md:mx-32 mx-12">
                <h3 className="text-pry-clr my-2 font-bold">
                    Welcome Back &#10095; &#10095; &#10095;
                </h3>
                <p className="text-black font-normal text-sm">
                    Kindly fill in your details correctly to login
                </p>
                <form action="" method="post" className="mt-20  lg:mx-24">
                    <div className="flex flex-row mt-10 justify-between">
                        <label htmlFor="Email Address:" className="text-pry-clr font-bold">Email Address:</label>
                        <input type="email" 
                            className="border-2 p-2 w-wide h-high text-black bg-nude rounded-md border-pry-clr hover:bg-gray-700" 
                            name="email" 
                            id="" 
                            value={value.email}
                            onChange={handleChange}
                            placeholder="Example@mail.com"
                        />
                    </div>
                    <div className="flex justify-end">
                        {errors.email && <p className="text-red-700 block">{errors.email}</p>}
                    </div>
                    <div className="flex flex-row mt-10 justify-between">
                        <label htmlFor="Password:" required={true} className="text-pry-clr font-bold">Password:</label>
                        <input type="password" 
                            className="border-2 p-2 text-black h-high w-wide border-pry-clr bg-nude rounded-md hover:bg-gray-700"
                            name="password" 
                            id="" 
                            value={value.password}
                            onChange={handleChange}
                            placeholder="**********"
                        />
                    </div>
                    <div className="flex justify-end  sm:justify-right">
                        {errors.password && <p className="text-red-700 block">{errors.password}</p>}
                    </div>
                    <div className="my-8 flex justify-end">
                        <Link to="/" className="font-normal button text-sm ">Forgot Password?</Link>
                    </div>
                    <div className="text-center cursor-pointer mt-4 hover:bg-gray-600 mb-6 text-white rounded-lg p-2 bg-pry-clr">
                        <button type="submit" onClick={handleSubmit} className="font-bold">
                            Login
                        </button>
                    </div>
                </form>
                <div className="text-center text-gray mb-20">
                    Don’t have an account? <Link to="/signup" className="hover:underline font-bold text-pry-clr ">Sign up</Link>
                </div>
            </div>
        </div>
    );
}
 
export default Login;