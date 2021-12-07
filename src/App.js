import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "../src/pages/Home/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          Aigis
          <NavBar />
        </header>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
