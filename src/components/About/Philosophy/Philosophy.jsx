import "./Philosophy.css";

function Philosophy() {
  return (
    <section className="philosophy">
      <div className="container">
        <div className="philosophy-header">
          <span>The TEDOJO Philosophy</span>

          <h2>
            Principles That Extend Beyond
            <br />
            The Dojo
          </h2>
        </div>

        <div className="philosophy-grid">
          <div className="philosophy-card">
            <h3>Discipline Before Power</h3>

            <p>
              True strength begins with self-control, consistency and
              commitment.
            </p>
          </div>

          <div className="philosophy-card">
            <h3>Character Before Rank</h3>

            <p>
              Leadership is not defined by titles but by integrity and action.
            </p>
          </div>

          <div className="philosophy-card">
            <h3>Leadership Before Titles</h3>

            <p>
              Great leaders inspire confidence and resilience in those around
              them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Philosophy;
