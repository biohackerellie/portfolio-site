import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import {
    BrowserRouter as Router, Navigate, Route,
    Routes
} from "react-router-dom";
import Preloader from "../src/components/Pre";
import "./App.css";
import About from "./components/About/About";
import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import Music from "./components/Music/music";
import Navbar from "./components/Navbar";
import Projects from './components/Projects/Projects';
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";


function App() {
  const [load, upadateLoad] = useState(true); 

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Music" element={<Music />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}




export default App;
