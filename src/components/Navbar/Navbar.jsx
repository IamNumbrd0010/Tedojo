import { useState, useEffect } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import "./Navbar.css";
import Button from "../UI/Button";

import logo from "../../assets/logo/tedojo-logo.png";
import navLinks from "../../data/navLinks";
import { Link } from "react-router-dom";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-container">
        <Link to="/" className="logo">
          <img src={logo} alt="TEDOJO Logo" />
        </Link>

        <nav className={menuOpen ? "nav active" : "nav"}>
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link to={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}

            <li className="mobile-register">
              <Link to="/register">
                <Button variant="gold">Register </Button>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="desktop-register">
          <Link to="/register">
            <Button variant="gold">Register Now</Button>
          </Link>
        </div>
      </div>
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
      </div>
    </header>
  );
}

export default Navbar;
