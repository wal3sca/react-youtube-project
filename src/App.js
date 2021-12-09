import './App.css';
import { Route, Routes } from 'react-router-dom';

// import SearchBar from './Home/SearchBar';
// import Videos from './Videos/VideosRender'
import React from "react";
// import Home from "./components/Home";
// import About from "./components/About";
import NavBar from "./components/NavBar";
// import Comments from "./components/Comments";


export default function App() {
  return (

    <div>
      {/* <Home />
      <About /> */}
      <Routes>
      <Route path='/' element={<NavBar />} />
      </Routes>
      {/* <SearchBar />
      <Videos/>
      <Comments /> */}
    </div>
  );
}


