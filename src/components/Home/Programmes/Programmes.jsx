import "./Programmes.css";
import programmes from "../../../data/programmes";
import ProgrammeCard from "../ProgrammeCard/ProgrammeCard";
import Button from "../../UI/Button";

function Programmes() {
  return (
    <section className="programmes" id="courses">
      <div className="container">
        <span className="section-subtitle">Signature Programmes</span>

        <h2 className="section-title">
          Executive Training Designed for Transformation
        </h2>

        <p className="section-description">
          Explore a selection of our flagship programmes crafted to build
          confident, resilient and effective leaders.
        </p>

        <div className="programme-grid">
          {programmes.map((programme) => (
            <ProgrammeCard key={programme.id} programme={programme} />
          ))}
        </div>

        <div className="view-all">
          <Button variant="gold">View All Programmes →</Button>
        </div>
      </div>
    </section>
  );
}

export default Programmes;
