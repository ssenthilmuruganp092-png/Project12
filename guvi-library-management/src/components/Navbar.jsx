import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>📚 GUVI Library</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/search">Search</Link>

        <Link to="/add">Add Book</Link>
      </div>
    </nav>
  );
}

export default Navbar;