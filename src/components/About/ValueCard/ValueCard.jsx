import "./ValueCard.css";

function ValueCard({ title, text }) {
  return (
    <div className="value-card">
      <h3>{title}</h3>

      <p>{text}</p>
    </div>
  );
}

export default ValueCard;
