import "./Journey.css";

const steps = [
  {
    number: "01",
    title: "Choose a Programme",
    text: "Select the executive programme that aligns with your goals.",
  },
  {
    number: "02",
    title: "Train with Experts",
    text: "Learn from experienced instructors in a structured environment.",
  },
  {
    number: "03",
    title: "Lead with Confidence",
    text: "Apply discipline, resilience and leadership in everyday life.",
  },
];

function Journey() {
  return (
    <section className="journey">
      <div className="container">
        <span className="section-subtitle">Your Journey</span>

        <h2 className="section-title">Three Steps to Transformation</h2>

        <div className="journey-grid">
          {steps.map((step) => (
            <div className="journey-card" key={step.number}>
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
