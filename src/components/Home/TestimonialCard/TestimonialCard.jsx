import "./TestimonialCard.css";

function TestimonialCard({ testimonial }) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-top">
        <span className="rating">★★★★★</span>
        <span className="verified">Verified Executive Graduate</span>
      </div>

      <div className="testimonial-image">
        <img src={testimonial.image} alt={testimonial.name} />
      </div>

      <div className="quote-icon">“</div>

      <p className="testimonial-quote">{testimonial.quote}</p>

      <div className="testimonial-user">
        <h3>{testimonial.name}</h3>
        <span>{testimonial.role}</span>
        <p>{testimonial.company}</p>
      </div>
    </div>
  );
}

export default TestimonialCard;
