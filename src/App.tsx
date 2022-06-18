import Navbar from "./Components/Navbar";
import Homepage from "./Pages/Homepage";
import "./Assets/Styles/App.css";
import "./Assets/Styles/Navbar.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LeftMenu from "./Components/LeftMenu";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <LeftMenu />
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
