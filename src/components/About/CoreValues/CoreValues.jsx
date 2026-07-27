import coreValues from "../../../data/coreValues";
import "./CoreValues.css";
import ValueCard from "../ValueCard/ValueCard";

function CoreValues() {
  return (
    <section className="CoreValues">
      <div className="container">
        <div className="CoreValues-header">
          <span>Core Values</span>

          <h3>Our Principles</h3>

          <p>The values that shape our training, leadership and community.</p>
        </div>

        <div className="CoreValues-grid">
          {coreValues.map((value) => (
            <ValueCard key={value.id} title={value.title} text={value.text} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoreValues;
