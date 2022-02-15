import React, { useRef, useState } from "react";
import './App.css';
import Navbar from "./components/Navbar";
import TraingleCoordinatesCalculator from "./components/TriangleCoordinatesCalculator";
import TriangleFromCoordinates from "./components/TriangleFromCoordinates";
import { BrowserRouter as Router, Routes,  Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/TraingleCoordinatesCalculator' exact element={<TraingleCoordinatesCalculator/>}/>
        <Route path='/TriangleFromCoordinates' exact element={<TriangleFromCoordinates/>}/>
        </Routes>
    </Router>
  );
}

export default App;
