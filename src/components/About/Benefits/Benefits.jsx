import "./Benefits.css";

import benefits from "../../../data/benefits";
import BenefitCard from "../BenefitCard/BenefitCard";

function Benefits() {
  return (
    <section className="benefits">
      <div className="container">
        <div className="benefits-header">
          <span>Why TEDOJO?</span>

          <h2>Why Executive Karate?</h2>

          <p>
            TEDOJO combines martial arts principles with leadership development
            to help professionals thrive under pressure.
          </p>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.id} benefit={benefit} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
