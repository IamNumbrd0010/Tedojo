import "./Journey.css";
import journey from "../../../data/journey";

function Journey() {
  return (
    <section className="journey">
      <div className="container">
        <span className="section-subtitle">Your Journey</span>

        <h2 className="section-title">Three Steps to Transformation</h2>

        <div className="journey-grid">
          {journey.map((step) => (
            <div
              className="journey-card"
              key={step.number}
              style={{
                backgroundImage: `linear-gradient(
          rgba(0, 0, 0, 0.55),
          rgba(0, 0, 0, 0.55)
        ), url(${step.image})`,
              }}>
              <span>{step.number}</span>

              <h3>{step.title}</h3>

              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Journey;
