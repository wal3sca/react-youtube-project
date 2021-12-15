import "./App.css";
import VideosRender from "./Videos/VideosRender";
import React from "react";
import NavBar from "./components/NavBar";


export default function App() {

  return (
    <main>
      <NavBar />
      <VideosRender />
    </main>
  );
}


