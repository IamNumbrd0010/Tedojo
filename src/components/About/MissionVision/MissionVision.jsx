import "./MissionVision.css";
import ValueCard from "../ValueCard/ValueCard";

function MissionVision() {
  return (
    <section className="mission-vision">
      <div className="container mission-grid">
        <ValueCard
          title="Our Mission"
          text="To equip professionals with discipline, confidence, resilience and leadership through executive karate training."
        />

        <ValueCard
          title="Our Vision"
          text="To become the leading platform where martial arts and leadership development unite to transform lives."
        />
      </div>
    </section>
  );
}

export default MissionVision;
