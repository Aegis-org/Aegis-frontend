import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/footer/footer";
import Home from "./pages/Home/Home";
import SignUp from "./pages/Home/SignUp";
import DynamicHeader from "./components/DynamicHeader";

function App() {
  return (
    <Router>
      <div className="App">
        <DynamicHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />


          {/* <Route path="/test" element={<DynamicHeader />} /> */}
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
