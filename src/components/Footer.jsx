import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>YourLogo</h2>
          <p>Building quality experiences with modern web solutions.</p>
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
          <p>Email: info@example.com</p>
          <p>Phone: +234 800 000 0000</p>
          <p>Lagos, Nigeria</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} Your Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
