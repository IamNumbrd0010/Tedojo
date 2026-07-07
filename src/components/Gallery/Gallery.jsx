import "./Gallery.css";
import SectionTitle from "../UI/SectionTitle/SectionTitle";
import gallery from "../../data/gallery";
import Button from "../UI/Button";

function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <SectionTitle
          subtitle="Gallery"
          title="Training in Action"
          description="A glimpse into the TEDOJO experience."
        />

        <div className="gallery-grid">
          {gallery.map((item) => (
            <div className="gallery-item" key={item.id}>
              <img src={item.image} alt={item.title} />
              <div className="gallery-overlay">
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-button">
          <Button variant="gold">View Full Gallery →</Button>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
