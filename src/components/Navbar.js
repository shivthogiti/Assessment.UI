import React from 'react';
import {  NavLink } from "react-router-dom";
const Navbar = () =>{
  return (
  <div>
    <li>
      <NavLink to="/TraingleCoordinatesCalculator">TraingleCoordinatesCalculator</NavLink>
    </li>
    <li>
      <NavLink to="/TriangleFromCoordinates">TriangleFromCoordinates</NavLink>
    </li>
  </div>
  );
}
export default Navbar;