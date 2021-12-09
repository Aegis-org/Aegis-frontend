import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./footer/footer";
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          Aigis
          <NavBar />
        </header>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
