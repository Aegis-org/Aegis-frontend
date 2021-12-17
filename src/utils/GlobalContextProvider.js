import { createContext, useState } from "react";

const GlobalContext = createContext({
  showModal: false,
  userDetails: {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    nin: "",
    verified: false,
    vehicles: [],
    _id: "",
    __v: 0,
  },
  testVehicleData: "123456789",
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export const GlobalContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [testVehicleData] = useState("123456789");
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    nin: "",
    verified: false,
    vehicles: [],
    _id: "",
    __v: 0,
  });

  const handleModalClose = () => setShowModal(false);

  const handleLogin = (email, password) => {
    fetch("https://aigis-backend-api.herokuapp.com/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      redirect: "follow",
    })
      .then((res) => {
        if (res.status === 200) {
          console.log("logged in!");
          setIsLoggedIn(() => true);
          console.log(isLoggedIn);
          return res.json();
        } else {
          console.log(res.statusText);
        }
      })
      .then((result) => {
        console.log(result);
        handleUserdetails(result);
      })
      .catch((error) => console.log("error", error));
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleUserdetails = (details) => {
    setUserDetails(() => details);
  };

  return (
    <GlobalContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        showModal: showModal,
        userDetails: userDetails,
        testVehicleData: testVehicleData,
        setShowModal: setShowModal,
        handleModalClose: handleModalClose,
        onLogin: handleLogin,
        onLogout: handleLogout,
        handleUserdetails: handleUserdetails,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
