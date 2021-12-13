import "./App.css";
import React from "react";
// import Home from "./components/Home";
import About from "./components/About";
// import NavBar from "./components/NavBar";
// import SearchBar from "./components/SearchBar";
// import Comments from "./components/Comments";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<About />} />
      </Routes>
      {/* <Home /> */}

      {/* <NavBar />
      <SearchBar />
      <Comments /> */}
    </main>
  );
}
