import "./WhyTedojo.css";
import SectionTitle from "./UI/SectionTitle/SectionTitle";
import features from "../data/features";

function WhyTedojo() {
  return (
    <section className="why" id="about">
      <div className="container">
        <SectionTitle
          subtitle="Why TEDOJO"
          title="More Than Martial Arts"
          description="TEDOJO combines executive leadership development with timeless karate principles, creating professionals who are stronger, healthier and more confident."
        />
        <div className="feature-grid">
          {features.map((feature) => (
            <div
              className="feature-card"
              key={feature.number}
              style={{
                backgroundImage: `linear-gradient(
                rgba(0, 0, 0, 0.55),
                rgba(0, 0, 0, 0.55)
              ), url(${feature.image})`,
              }}>
              <span className="feature-number">{feature.number}</span>

              <h3>{feature.title}</h3>

              <p>{feature.text}</p>
            </div>
          ))}
        </div>{" "}
      </div>
    </section>
  );
}

export default WhyTedojo;
