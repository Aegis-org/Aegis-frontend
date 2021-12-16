import { createContext, useState } from "react";

const GlobalContext = createContext({
  showModal: false,
  testVehicleData: "123456789",
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export const GlobalContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [testVehicleData] = useState("123456789");

  const handleModalClose = () => setShowModal(false);

  const handleLogin = () => {};

  const handleLogout = () => {};

  return (
    <GlobalContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        showModal: showModal,
        testVehicleData: testVehicleData,
        setShowModal: setShowModal,
        handleModalClose: handleModalClose,
        onLogin: handleLogin,
        onLogout: handleLogout,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
