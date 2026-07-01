import "./Courses.css";

function CourseModal({ course, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>{course.title}</h2>
        <p>
          <strong>Level:</strong> {course.level}
        </p>
        <p>
          <strong>Duration:</strong> {course.duration}
        </p>
        <p>{course.description}</p>

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default CourseModal;
