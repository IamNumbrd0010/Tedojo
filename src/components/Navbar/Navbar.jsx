import "./Navbar.css";
import Button from "../UI/Button";

import logo from "../../assets/logo/tedojo-logo.png";
import navLinks from "../../data/navLinks";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-container">
        <a href="/" className="logo">
          <img src={logo} alt="TEDOJO Logo" />
        </a>

        <nav>
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <Button variant="gold">Register Now</Button>
      </div>
    </header>
  );
}

export default Navbar;
