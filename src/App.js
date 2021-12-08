import './App.css';
import SearchBar from './Home/SearchBar';
import Videos from './Videos/VideosRender'
import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Comments from "./components/Comments";


export default function App() {
  return (
    <div>
      <Home />
      <About />
      <NavBar />
      <SearchBar />
      <Videos/>
      <Comments />
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
