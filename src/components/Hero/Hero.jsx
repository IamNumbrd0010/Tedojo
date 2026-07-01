import "./Hero.css";
import Button from "../UI/Button";
import heroImage from "../../assets/images/hero.png";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-tag">
            Executive Karate • Leadership • Discipline
          </span>

          <h1>
            Executive <br />
            Karate for <span>Leaders.</span>
          </h1>

          <p>
            Executive karate that develops confident leaders through discipline,
            resilience, focus and practical self-defence.
          </p>

          <div className="hero-buttons">
            <Button variant="gold">Register Now</Button>

            <Button variant="outline">Explore Courses</Button>
          </div>

          <div className="hero-stats">
            <div>
              <h2>500+</h2>
              <span>Executives Trained</span>
            </div>

            <div>
              <h2>12+</h2>
              <span>Years Experience</span>
            </div>

            <div>
              <h2>95%</h2>
              <span>Completion Rate</span>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <img src={heroImage} alt="Executive Karate" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
