import logo from './logo.svg';
import './App.css';
import Video from './video.js'
import About from './about.js'
import Layout from "./layout.js";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
            <Route path="video" element={<Video />} />
            <Route path="app" element={<App />} />
            <Route path="about" element={<About />} />
        </Route>
          </Routes>
        </BrowserRouter>
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React lol 
        </a>
      </header>
    </div>
  );
}

export default App;
