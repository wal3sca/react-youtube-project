import './App.css';
// import SearchBar from './Home/SearchBar';
import VideosRender from './Videos/VideosRender';
import React from "react";
// import Home from "./components/Home";
// import About from "./components/About";
import NavBar from "./components/NavBar";
// import Comments from "./components/Comments";
import { Routes, Route } from "react-router-dom";


export default function App () {
  return (

    <main>
      {/* <Home /> */}
      {/* <About /> */}
      <NavBar/>
      <VideosRender/>
      {/* <SearchBar /> */}
      {/* <Comments /> */}
    </main>
  )
}



// export default App;

