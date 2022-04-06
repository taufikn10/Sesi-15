import "./App.css";
import About from "./components/About";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Interest from "./components/Interest";
import Awards from "./components/Awards";
import Home from "./components/Home";
import NotFound from "./components/404page";

function App() {
  return (
    <Router>
      <>
        <div className="row g-sm-0">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/education" element={<Education />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/interest" element={<Interest />} />
              <Route path="/awards" element={<Awards />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </>
    </Router>
  );
}

export default App;
