import "./Footer.css";

import logo from "../assets/logo/tedojo-logo.png";
function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <a href="/" className="logo">
            <img src={logo} alt="TEDOJO Logo" />
          </a>
          <p>More Than Martial Arts</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Email: admintedojo@gmail.com</p>
          <p>Phone: +234 800 000 0000</p>
          <p>Lagos, Nigeria</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} The Executive Dojo. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
