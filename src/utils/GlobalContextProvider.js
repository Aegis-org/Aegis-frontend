import { createContext, useEffect, useState } from "react";

const GlobalContext = createContext({
  userDetails: {},
});

export const GlobalContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [login, setLogin] = useState({ error: false, loading: false });
  const [showModal, setShowModal] = useState(false);
  const [testVehicleData] = useState("123456789");
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const storedUserLoggedInInfo = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInfo === "1") {
      setIsLoggedIn(true);
    }

    return () => {
      localStorage.removeItem("isLoggedIn");
      setIsLoggedIn(false);
    };
  }, []);

  const handleModalClose = () => setShowModal(false);

  const handleLogin = async (email, password) => {
    setLogin({ ...login, error: false, loading: true });
    let response = await fetch(
      "https://aigis-backend-api.herokuapp.com/api/users/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        redirect: "follow",
      }
    );

    if (response.status === 200) {
      setIsLoggedIn(true);
      setLogin({ ...login, error: false, loading: false });
      response = await response.json();
      let result = await response.userDetails;
      localStorage.setItem("isLoggedIn", "1");
      localStorage.setItem("username", result.username);
      localStorage.setItem("isSeller", result.isSeller);
      setUserInfo(result);
    } else if (response.status === 400) {
      response = await response.json();
      setLogin({ ...login, error: true, loading: false });
      setIsLoggedIn(false);
      console.log(response);
    }
  };

  const handleLogout = async () => {
    const response = await fetch(
      "https://aigis-backend-api.herokuapp.com/api/users/logout",
      {
        method: "POST",
        body: "",
        redirect: "follow",
      }
    );

    if (response.status === 201) {
      const res = await response.json();
      setUserInfo({});
      console.log(res);
    } else {
      console.log(response);
    }

    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    localStorage.removeItem("isSeller");
    setIsLoggedIn(false);
    setLogin({ ...login, error: false, loading: false });
  };

  const handleUserdetails = (info) => {
    setUserInfo(info);
  };

  return (
    <GlobalContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        login: login,
        showModal: showModal,
        userInfo: userInfo,
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
