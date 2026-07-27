import "./BenefitCard.css";

function BenefitCard({ benefit }) {
  return (
    <div className="benefit-card">
      <h3>{benefit.title}</h3>

      <p>{benefit.description}</p>
    </div>
  );
}

export default BenefitCard;
