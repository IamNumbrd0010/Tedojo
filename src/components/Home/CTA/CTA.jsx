import "./CTA.css";
import Button from "../../UI/Button";

function CTA() {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta-content">
          <span className="cta-tag">Begin Your Executive Journey</span>

          <h2>
            Build Discipline.
            <br />
            Lead With Confidence.
          </h2>

          <p>
            Experience executive karate training designed to sharpen leadership,
            confidence, resilience, and mental strength.
          </p>

          <div className="cta-buttons">
            <Button variant="gold">Register Now</Button>
            <Button variant="outline">Explore Courses</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
