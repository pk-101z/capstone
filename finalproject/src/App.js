import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./index.css";

import HomePage from "./HomePage";
import Restaurants from "./Restaurant";
import ChickFilA from "./ChickFilA";
import ChurchChicken from "./churchchicken";
import RaisingCanes from "./RaisingCanes";
import Popeyes from "./Popeyes";
import Zaxbys from "./Zaxbys";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/restaurants/chick-fil-a" element={<ChickFilA />} />
        <Route path="/restaurants/church-chicken" element={<ChurchChicken />} />
        <Route path="/restaurants/raising-canes" element={<RaisingCanes />} />
        <Route path="/restaurants/popeyes" element={<Popeyes />} />
        <Route path="/restaurants/zaxbys" element={<Zaxbys />} />
      </Routes>
    </>
  );
}

function Navbar() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/restaurants">Restaurants</Link>
        </li>
      </ul>
    </nav>
  );
}
