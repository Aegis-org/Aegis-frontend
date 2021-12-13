import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar";
import Footer from "./footer/footer";
import Home from "./pages/Home/Home";
import DynamicHeader from "./components/DynamicHeader";

function App() {
  
  return (
    <Router>
      <div className="App">
        <DynamicHeader/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
