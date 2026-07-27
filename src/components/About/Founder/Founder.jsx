import "./Founder.css";

function Founder() {
  return (
    <section className="founder">
      <div className="container founder-container">
        <div className="founder-image">
          <img src="https://via.placeholder.com/500x600" alt="Founder" />
        </div>

        <div className="founder-content">
          <span>Meet the Founder</span>

          <h2>Leading Beyond the Dojo</h2>

          <blockquote>
            "Discipline is not something you practice once. It is something you
            live every day."
          </blockquote>

          <p>
            TEDOJO was created to bridge the gap between martial arts and
            leadership, helping executives and professionals cultivate
            confidence, resilience and strategic thinking.
          </p>

          <div className="founder-stats">
            <div>
              <h3>15+</h3>
              <p>Years Experience</p>
            </div>

            <div>
              <h3>500+</h3>
              <p>Students Trained</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Founder;
