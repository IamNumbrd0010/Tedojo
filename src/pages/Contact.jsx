import "./Contact.css";
import Button from "../components/UI/Button";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

function Contact() {
  return (
    <>
      <section className="contact-hero">
        <div className="container">
          <span>Contact TEDOJO</span>

          <h1>Let's Start Your Journey</h1>

          <p>
            Whether you're interested in executive training, self-defence,
            children's classes, or simply want to learn more about TEDOJO, we're
            here to help.
          </p>
        </div>
      </section>

      <section className="contact-info">
        <div className="container">
          <div className="contact-grid">
            {/* Address */}

            <div className="contact-card">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>

              <h3>Visit Us</h3>

              <p>
                TEDOJO Training Centre
                <br />
                Lagos, Nigeria
              </p>
            </div>

            {/* Phone */}

            <div className="contact-card">
              <div className="contact-icon">
                <FaPhoneAlt />
              </div>

              <h3>Call Us</h3>

              <p>+234 XXX XXX XXXX</p>
            </div>

            {/* Email */}

            <div className="contact-card">
              <div className="contact-icon">
                <FaEnvelope />
              </div>

              <h3>Email Us</h3>

              <p>info@tedojo.ng</p>
            </div>

            {/* WhatsApp */}

            <div className="contact-card whatsapp">
              <div className="contact-icon">
                <FaWhatsapp />
              </div>

              <h3>WhatsApp</h3>

              <p>Chat with our team instantly.</p>

              <Button variant="primary">Start Chat</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-location">
        <div className="container">
          <div className="location-header">
            <span>Visit Our Dojo</span>

            <h2>Training Hours & Location</h2>
          </div>

          <div className="location-grid">
            <div className="hours-card">
              <h3>Training Hours</h3>

              <div className="hour-row">
                <span>Monday - Friday</span>
                <strong>8:00am - 6:00pm</strong>
              </div>

              <div className="hour-row">
                <span>Saturday</span>
                <strong>9:00am - 3:00pm</strong>
              </div>

              <div className="hour-row">
                <span>Sunday</span>
                <strong>Closed</strong>
              </div>
            </div>

            <div className="map-card">Google Map Goes Here</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
