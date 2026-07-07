import "./SectionTitle.css";

function SectionTitle({ subtitle, title, description, light = false }) {
  return (
    <div className={`section-heading ${light ? "light" : ""}`}>
      <span className="section-subtitle">{subtitle}</span>

      <h2 className="section-title">{title}</h2>

      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

export default SectionTitle;
