import "./App.css";
import { BrowserRouter as Router } from 'react-router-dom';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar";
import Footer from "./footer/footer";
function App() {
  return (
    <Router>
      <div className="App">
        <Header>
          Aigis
        </Header>
        <NavBar />
        <Footer />
      </div>
    </Router>
  );
}

export default App;