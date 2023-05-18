import './App.css';
import Video from './pages/video.js'
import About from './pages/about.js'
import Layout from "./pages/layout.js";
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
      </header>
    </div>
  );
}

export default App;
