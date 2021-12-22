import { useState, useRef, useContext } from "react";
import Profile from "../../../components/Profile";
import { useGetScreenBreakPoint } from "../../../hooks/useGetScreenBreakPoint";
import ProfileButton from "../../../components/ProfileButton";
import defaultVehicleImage from "../../../assets/product-mercedes.png";
import { validFileType, returnFileSize } from "./imageValidation";

import GlobalContext from "../../../utils/GlobalContextProvider";
import { Navigate } from "react-router-dom";
import Spinner from "../../../components/Spinner";

const Dashboard = () => {
  const screen = useGetScreenBreakPoint();
  const imageRef = useRef(null);
  const formRef = useRef(null);

  const user = useContext(GlobalContext);
  console.log(user);

  const postURL =
    "https://aigis-backend-api.herokuapp.com/api/users/vehicles/create";

  const initialState = {
    image: {},
    type: "",
    model: "",
    year: "",
    mileage: "",
    color: "",
    location: "",
    price: "",
    vehicleNumber: "",
    fuel: "petroleum",
  };
  // const initialError = {errorState: false, errorValues:[]}

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  const updateImage = () => {
    const imageFile = imageRef.current.files[0];

    if (!imageFile) return;
    if (validFileType(imageFile)) {
      const size = returnFileSize(imageFile.size);
      const url = URL.createObjectURL(imageFile);
      console.log(imageFile, size);
      setImage({ imageFile, error: "", url: url, size: size });
    } else {
      setImage({ error: "Invalid file type" });
    }
  };

  const clearForm = () => {
    setValues(initialState);
    setImage({});
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (values.vehicleNumber.length < 9) {
      setError({
        errorState: true,
        errorValues: [
          ...error.errorValues,
          "Vehicle number must be greater than 8",
        ],
      });
      return;
    }

    setLoading(true);

    let formdata = new FormData();
    formdata.append("vehicleImage", image.imageFile);
    formdata.append("vehicleName", values.model);
    formdata.append("vehicleNumber", values.vehicleNumber);
    formdata.append("vehicleColor", values.color);
    formdata.append("vehicleMakeYear", values.year);
    formdata.append("price", values.price);
    formdata.append("fuel", values.fuel);
    formdata.append("mileage", values.mileage);
    formdata.append("location", values.location);
    formdata.append("vehicleType", values.type);
    formdata.append("username", user.userInfo.username);

    console.log(Array.from(formdata));

    const response = await fetch(postURL, {
      method: "POST",

      body: formdata,
    });

    if (response.status === 200) {
      setLoading(false);
      // const res = await response.json();
      setError({ errorState: false, errorValues: [] });

      setTimeout(() => {
        setError({ errorState: "initial" });
      }, 3000);
    } else {
      setLoading(false);
      console.log(response);
      setError({ errorState: true, errorValues: [response.statusText] });
    }

    // console.log('formSubmitted')
  };

  const [image, setImage] = useState({});
  const [values, setValues] = useState(initialState);
  const [error, setError] = useState({
    errorState: "initial",
    errorValues: [],
  });
  const [loading, setLoading] = useState(false);

  const carDetailsForm = [
    {
      text: "Vehicle Model",
      type: "text",
      name: "model",
      halfSpan: true,
      placeholder: "",
    },
    {
      text: "Year",
      type: "number",
      name: "year",
      halfSpan: true,
      placeholder: "",
    },
    {
      text: "Color",
      type: "text",
      name: "color",
      halfSpan: true,
      placeholder: "",
    },
    {
      text: "Mileage",
      type: "number",
      name: "mileage",
      halfSpan: true,
      placeholder: "Vehicle mileage in KM",
    },
    {
      text: "Location",
      type: "text",
      name: "location",
      placeholder: "Current address",
      halfSpan: false,
    },
  ];
  const fuelOptions = ["petroleum", "diesel", "hydrogen", "electricity"];

  if (!user.isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-4 justify-between my-5 md:my-20 px-2">
      <div className=" flex flex-col gap-y-4 md:pr-8">
        <div>
          <p className="font-semibold mb-1 pl-2">Seller's Name</p>
          <div className="bg-pry-accent px-2 py-3 rounded-xl font-medium whitespace-nowrap">
            {user.userInfo.firstName + " " + user.userInfo.lastName}
          </div>
        </div>
        <div>
          <p className="font-semibold mb-1 pl-2">Upload Vehicle Image</p>
          <div className="relative flex items-center bg-pry-accent px-2 py-2 rounded-xl font-medium whitespace-nowrap">
            <label className="cursor-pointer " htmlFor="vehicleImage">
              Select Image
            </label>
            <input
              type="file"
              accept="image/*"
              name="vehicleImage"
              className="uploadVehicleImage"
              ref={imageRef}
              id="vehicleImage"
              onChange={updateImage}
              required
            />
            <p className="w-full px-2 py-2 rounded-lg ml-3 h-full bg-white overflow-hidden">
              {image.imageFile ? image.imageFile.name : "No file selected"}
            </p>
            {image.size && (
              <span className="absolute -bottom-7 right-0 text-gray-100 px-1 rounded-md bg-gray-600">
                size: {image.size}
              </span>
            )}
            {image.error && (
              <p className="absolute text-red-500 text-sm bottom-0">
                {image.error}
              </p>
            )}
          </div>
        </div>
        <p className="text-center mt-10">CAR DETAILS</p>
        <div className="grid gap-2 grid-cols-2 max-w-full">
          {carDetailsForm.map((input) => (
            <div
              key={input.name}
              className={`col-span-2 md:${input.halfSpan && "col-span-1"}`}
            >
              <label className="font-semibold mb-1 pl-2" htmlFor={input.name}>
                {input.text}
              </label>
              <input
                className="bg-pry-accent rounded-xl font-medium text-base p-2 w-full text-gray-800"
                type={input.type}
                name={input.name}
                id={input.name}
                required
                value={values[input.name]}
                placeholder={input.placeholder}
                onChange={(e) => handleInput(e)}
              />
            </div>
          ))}
        </div>
        <div
          className="w-1/2 mx-auto mt-6 cursor-pointer"
          onClick={() => clearForm()}
        >
          <ProfileButton
            text={"Clear"}
            textColor={"text-red-500"}
            bgColor={"bg-pry-accent"}
          />
        </div>
      </div>

      <div className="flex flex-col gap-y-6 dashboard-divider md:px-8">
        <h1 className="font-medium text-center ">
          UPLOAD VEHICLES FOR DISPLAY
        </h1>
        <div className=" aspect-video overflow-hidden">
          <img
            className="block w-full h-40 object-cover rounded-xl"
            src={image.url ? image.url : defaultVehicleImage}
            alt="uploaded vehicle or default vehicle"
          />
        </div>
        <div className="px-5 py-5 bg-pry-clr rounded-xl text-white">
          <form
            ref={formRef}
            name="vehicleCreate"
            id="vehicleCreate"
            className="flex flex-col gap-y-4"
            onSubmit={(e) => submitHandler(e)}
          >
            <InputField
              text={"Vehicle Type"}
              type={"text"}
              name={"type"}
              values={values}
              placeholder={"car, bus ?"}
              handleInput={handleInput}
            />
            <InputField
              text={"Asking Price"}
              type={"number"}
              name={"price"}
              values={values}
              placeholder={"price in dollars"}
              handleInput={handleInput}
              icon={"$"}
            />
            <InputField
              text={"vehicle Number"}
              type={"text"}
              name={"vehicleNumber"}
              values={values}
              handleInput={handleInput}
            />

            <label htmlFor="fuel">
              Fuel
              <select
                value={values.fuel}
                name="fuel"
                id="fuel"
                className="capitalize bg-white bg-opacity-50 rounded-xl font-medium my-1 px-4 py-2 w-full text-white focus:outline-none focus:bg-opacity-30"
                placeholder="Select vehicle fuel source"
                onChange={(e) => handleInput(e)}
              >
                {fuelOptions.map((option) => (
                  <option
                    key={option}
                    className="capitalize bg-black bg-opacity-50 rounded-xl font-medium mt-1 px-4 py-2 w-full text-white focus:outline-none focus:bg-opacity-30"
                    value={option}
                  >
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <button className="mx-auto mt-4 cursor-pointer" type="submit">
              <ProfileButton
                text={"Upload"}
                textColor={"text-pry-clr"}
                bgColor={"bg-pry-accent"}
              />
            </button>
          </form>
        </div>
        {error.errorState === true && error.errorValues && (
          <div className="w-50 h-20 p-5 rounded-lg relative mx-auto my-5 font-semibold text-red-500">
            {error.errorValues.map((err) => (
              <p key={err}>Error: {err}</p>
            ))}
          </div>
        )}
      </div>

      {loading && (
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-gray-600 bg-opacity-50 z-50">
          <Spinner />
        </div>
      )}

      {error.errorState === false && (
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-40">
          <div className="p-8 rounded-lg bg-white font-bold text-green-400 shadow-lg">
            Successfully Uploaded
          </div>
        </div>
      )}

      {!screen.match(/^(sm|md|lg)$/) && (
        <div className="dashboard-divider md:pl-8">
          <Profile />
        </div>
      )}
    </div>
  );
};

const InputField = ({
  text,
  type,
  name,
  values,
  placeholder,
  handleInput,
  icon,
  size,
}) => {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={name} className="relative">
        {text}
        <input
          className="bg-white bg-opacity-50 rounded-xl font-medium mt-1 px-4 pl-5 py-2 w-full text-white focus:outline-none focus:bg-opacity-30 placeholder-purple-300 "
          type={type}
          name={name}
          id={name}
          value={values[name]}
          placeholder={placeholder}
          size={size}
          onChange={(e) => handleInput(e)}
          required
        />
        {icon && (
          <span className="absolute font-bold text-md left-2 bottom-2 text-purple-900 rounded-full">
            $
          </span>
        )}
      </label>
    </div>
  );
};

InputField.defaultProps = {
  placeholder: "",
  icon: "",
  size: "",
};

export default Dashboard;
