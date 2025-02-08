import React from "react";
import Navbar from "./components/Navbar";
import { HashRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen px-30">
      {/* <a href="https://hits.sh/siwoo-jung.github.io/siwoo_blog/">
        <img
          alt="Hits"
          src="https://hits.sh/siwoo-jung.github.io/siwoo_blog.svg?view=today-total&style=plastic&label=visitors&color=000000&labelColor=000000"
        />
      </a> */}
      <HashRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="about" element={<About />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
