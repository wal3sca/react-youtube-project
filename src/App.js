import './App.css';
import { Routes, Route } from 'react-router-dom';
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

// export default App;
