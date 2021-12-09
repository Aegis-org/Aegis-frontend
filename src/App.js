import "./App.css";
import { BrowserRouter as Router } from 'react-router-dom';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar";


function App() {
  return (
    <Router>   
      <div className="App">
        <Header>
          Aigis
        </Header>
        <NavBar />
      </div>
    </Router>
  );
}

export default App;