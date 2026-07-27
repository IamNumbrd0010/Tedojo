import "./CTA.css";
import Button from "../../UI/Button";

function CTA({ tag, title, description, primaryButton, secondaryButton }) {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta-content">
          <span className="cta-tag">{tag}</span>

          <h2>{title}</h2>

          <p>{description}</p>

          <div className="cta-buttons">
            <Button variant="gold">{primaryButton}</Button>

            <Button variant="outline">{secondaryButton}</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
