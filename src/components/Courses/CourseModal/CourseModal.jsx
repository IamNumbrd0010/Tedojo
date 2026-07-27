import "./CourseModal.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function CourseModal({ course, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          ×
        </button>

        <span className="modal-level">{course.level}</span>

        <h2>{course.title}</h2>

        <p>{course.description}</p>

        <div className="modal-details">
          <div>
            <strong>Duration</strong>
            <p>{course.duration}</p>
          </div>

          <div>
            <strong>Level</strong>
            <p>{course.level}</p>
          </div>
        </div>

        <div className="modal-outcomes">
          <h3>What you'll gain</h3>

          <ul>
            <li>Leadership and discipline</li>
            <li>Confidence under pressure</li>
            <li>Physical and mental resilience</li>
            <li>Strategic thinking skills</li>
          </ul>
        </div>

        <Link to="/Register" className="register-btn" onClick={onClose}>
          Register Now
        </Link>
      </div>
    </div>
  );
}

export default CourseModal;
