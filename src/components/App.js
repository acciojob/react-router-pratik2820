
import React from "react";
import './../styles/App.css';
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import { Routes,Route } from "react-router-dom/dist";

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <Navbar/>

        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about"element={<About/>}/>
        </Routes>
    </div>
  )
}

export default App
