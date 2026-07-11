import "./Footer.css";
import logo from "../../assets/logo/tedojo-logo.png";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src={logo} alt="TEDOJO Logo" />

          <p>
            Executive Karate for leaders committed to building confidence,
            resilience and discipline.
          </p>

          <div className="socials">
            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaLinkedinIn />
            </a>

            <a href="#">
              <FaYoutube />
            </a>
          </div>
        </div>

        <div>
          <h3>Quick Links</h3>

          <ul>
            <li>
              <a href="#">Home</a>
            </li>

            <li>
              <a href="#">About</a>
            </li>

            <li>
              <a href="#">Courses</a>
            </li>

            <li>
              <a href="#">Gallery</a>
            </li>

            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div>
          <h3>Courses</h3>

          <ul>
            <li>Executive Karate</li>

            <li>Corporate Training</li>

            <li>Leadership Workshops</li>

            <li>Private Coaching</li>
          </ul>
        </div>

        <div>
          <h3>Contact</h3>

          <ul>
            <li>Lagos, Nigeria</li>

            <li>+234 XXX XXX XXXX</li>

            <li>admintedojo@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} TEDOJO. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
