import './App.css';

import { Routes, Route } from 'react-router-dom';

// import SearchBar from './Home/SearchBar';
// import Videos from './Videos/VideosRender'

import React from "react";
// import Home from "./components/Home";
// import About from "./components/About";
import NavBar from "./components/NavBar";

// import SearchBar from "./components/SearchBar";

// import Comments from "./components/Comments";


export default function App() {
  return (

    <main>
      {/* <Home /> */}
      {/* <About /> */}
      <Routes>
      <Route path='/' element={<NavBar />} />
      </Routes>
      {/* <SearchBar /> */}
      {/* <Comments /> */}
    </main>
  )
}



// export default App;

