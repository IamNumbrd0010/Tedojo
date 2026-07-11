import "./AboutHero.css";
import Button from "../../UI/Button";

function AboutHero() {
  return (
    <section className="about-hero">
      <div className="container about-hero-content">
        <span className="about-tag">About TEDOJO</span>

        <h1>
          Beyond Martial Arts.
          <br />
          Beyond Leadership.
        </h1>

        <p>
          TEDOJO combines the discipline of karate with the mindset of
          leadership, helping executives, entrepreneurs, and professionals
          unlock confidence, resilience, and excellence.
        </p>

        <div className="about-hero-buttons">
          <Button variant="gold">Explore Courses</Button>

          <Button variant="outline">Register Now</Button>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;
