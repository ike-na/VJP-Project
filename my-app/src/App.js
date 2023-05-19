import './App.css';
import Home from './pages/home.js'
import Video from './pages/video.js'
import About from './pages/about.js'
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// App() is the home page of the web page. It contains navigation bar to other pages
function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <header>
        <div className="container">
          <nav>
                <ul>
                    <li><Link to="/">Koti</Link></li>
                    <li><Link to="/video">Video</Link></li>
                    <li><Link to="/about">Lisää</Link></li>
                </ul>   
            </nav>
            </div>
        </header>
          <Routes>
            <Route path="app" element={<App />} /> 
            <Route path="/" element={<Home />} />
            <Route path="video" element={<Video />} />
            <Route path="about" element={<About />} />
          </Routes>
          <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
