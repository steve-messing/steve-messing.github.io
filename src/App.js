import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FineArt from "./pages/FineArt";
import Branding from "./pages/Branding";
import Packaging from "./pages/Packaging";
import Books from "./pages/Books";
import ConceptArt from "./pages/ConceptArt";
import Beef from "./pages/Beef";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/fine-art" element={<FineArt />} />
      <Route path="/branding" element={<Branding />} />
      <Route path="/books" element={<Books />} />
      <Route path="/concept-art" element={<ConceptArt />} />
      <Route path="/packaging" element={<Packaging />} />
      <Route path="/beef" element={<Beef />} />
    </Routes>
  </Router>
  )
}

export default App;
