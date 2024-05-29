import React from "react";
// import Hamburger from "./components/hamburger";
// import Nav from "./components/nav";
// import Logo from "./components/logo";
// import Pdf from "./components/pdf";
// import resume from "./assets/resume.pdf";
// import cv from "./assets/cv.pdf";
import Home from "./pages/Home";
import TicTacToe from "./pages/TicTacToe";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/tic-tac-toe" element={<TicTacToe />} />
    </Routes>
  )
}

export default App;
