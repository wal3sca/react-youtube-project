import "./App.css";
import VideosRender from "./Videos/VideosRender";
import React from "react";
import NavBar from "./components/NavBar";
// import Comments from "./components/Comments";

export default function App() {
  return (
    <main>
      <NavBar />
      <VideosRender />
    </main>
  );
}

// export default App;
