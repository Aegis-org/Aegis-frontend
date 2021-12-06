import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
function App() {
  return (
    <Router>   
      <div className="App">
        <header className="App-header">
          Aigis
          <NavBar />
        </header>
      </div>
    </Router>
  );
}

export default App;
