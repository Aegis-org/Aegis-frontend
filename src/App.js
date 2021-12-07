import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./footer/footer";
import Home from "./pages/Home/Home";
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          Aigis
          <NavBar />
        </header>
        {/* <Footer /> */}
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
