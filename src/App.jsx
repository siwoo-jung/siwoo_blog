import React from "react";
import Navbar from "./components/Navbar";
import { HashRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";

const App = () => {
  return (
    <>
      <div>App</div>
      <HashRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="about" element={<About />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
