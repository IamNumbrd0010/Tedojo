import "./ProgrammeCard.css";
import Button from "../UI/Button";

function ProgrammeCard({ programme }) {
  return (
    <div className="programme-card">
      <div className="programme-image">
        <img src={programme.image} alt={programme.title} />
      </div>

      <div className="programme-content">
        <span className="programme-level">{programme.level}</span>

        <h3>{programme.title}</h3>

        <p>{programme.description}</p>

        <div className="programme-meta">
          <span>{programme.duration}</span>
        </div>

        <div className="programme-buttons">
          <Button variant="silver">Learn More</Button>

          <Button variant="gold">Register</Button>
        </div>
      </div>
    </div>
  );
}

export default ProgrammeCard;
