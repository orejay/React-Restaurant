import '../styles/navbar.css'
import { Outlet, Link } from 'react-router-dom';

function NavBar() {
  return(
    <div id="nav-bar">
      <img id="logo-box" alt="Logo"></img>
      <div className="menu">
        <ul>
            <li>
                <Link to="/" >Home</Link>
            </li>
            <li>
                <Link to="/products">Products</Link>
            </li>
            <li>
                <Link to="/about" >About</Link>
            </li>
            <li>
                <Link to="/contact" >Contact</Link>
            </li>
        </ul>
      </div>
      <Outlet />
    </div>
  )
}

export default NavBar;