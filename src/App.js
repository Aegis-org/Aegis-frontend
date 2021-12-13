import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/footer/footer";
import Home from "./pages/Home/Home";
import DynamicHeader from "./components/DynamicHeader";

function App() {
  return (
    <Router>
      <div className="App">
        <Header>Aigis</Header>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/test" element={<DynamicHeader />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
