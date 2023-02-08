import { Link } from "react-router-dom";
import logo from './logo.jpg';

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" />
            <h1>Song Saver</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </div>
        </nav>
    );
}

export default Navbar;