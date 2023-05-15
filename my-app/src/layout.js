import { Outlet, Link } from "react-router-dom";
import './App.css';

const Layout = () => {
  return (
    <>
      <div class="topnav">
        <li><Link to="/video">Video</Link></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </div>

      <Outlet />
    </>
  )
};

export default Layout;