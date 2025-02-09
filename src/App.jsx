import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { HashRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="bg-gray-100 min-h-screen dark:bg-black/90">
      {/* <a href="https://hits.sh/siwoo-jung.github.io/siwoo_blog/">
        <img
          alt="Hits"
          src="https://hits.sh/siwoo-jung.github.io/siwoo_blog.svg?view=today-total&style=plastic&label=visitors&color=000000&labelColor=000000"
        />
      </a> */}
      <HashRouter>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode}></Navbar>
        <Routes>{/* <Route path="about" element={<About />} /> */}</Routes>
      </HashRouter>
    </div>
  );
};

export default App;
