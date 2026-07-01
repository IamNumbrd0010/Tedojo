import "./WhyTedojo.css";

const features = [
  {
    number: "01",
    title: "Leadership",
    text: "Develop decisive leadership through discipline, confidence and mental resilience.",
  },
  {
    number: "02",
    title: "Executive Wellness",
    text: "Improve physical fitness, posture, energy and overall wellbeing while managing demanding careers.",
  },
  {
    number: "03",
    title: "Practical Self-Defence",
    text: "Learn effective real-world techniques designed to improve awareness and personal safety.",
  },
  {
    number: "04",
    title: "Mental Discipline",
    text: "Strengthen focus, emotional control and decision-making under pressure.",
  },
];

function WhyTedojo() {
  return (
    <section className="why" id="about">
      <div className="container">
        <span className="section-subtitle">Why TEDOJO</span>

        <h2 className="section-title">More Than Martial Arts</h2>

        <p className="section-description">
          TEDOJO combines executive leadership development with the timeless
          principles of karate, creating professionals who are stronger,
          healthier and more confident in every aspect of life.
        </p>

        <div className="feature-grid">
          {features.map((feature) => (
            <div className="feature-card" key={feature.number}>
              <span className="feature-number">{feature.number}</span>

              <h3>{feature.title}</h3>

              <p>{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyTedojo;
