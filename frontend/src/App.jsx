import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Signin from "./Pages/Signin";
import "./App.css";
import Signup from "./Pages/Signup";
import About from "./Pages/About";

function App()
{
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
}

export default App