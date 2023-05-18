import { Outlet, Link } from "react-router-dom";
import './App.css';

const Layout = () => {
  return (
    <>
      <div class="container">
            <nav>
                <ul>
                    <li><Link to="/">Koti</Link></li>
                    <li><Link to="/video">Video</Link></li>
                    <li><Link to="/about">Lisää</Link></li>
                </ul>   
            </nav>
        </div>
      <Outlet />
    </>
  )
};

export default Layout;