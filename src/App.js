import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home.js";
import Footer from "./components/Footer.js";
import Recipes from "./pages/Recipes.js";
import Setting from "./pages/Setting.js";

function App() {
  return (
    <Router>
       <Navbar />
      <div className="container main">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/recipes" element={<Recipes />}/>
          <Route path="/setting" element={<Setting />}/>
        </Routes>
      </div>
      < Footer/>
    </Router>
  );
}

export default App;
