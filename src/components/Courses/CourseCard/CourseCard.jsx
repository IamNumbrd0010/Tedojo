import "./CourseCard.css";

function CourseCard({ course, onLearnMore }) {
  return (
    <div className="course-card">
      <span className="course-level">{course.level}</span>

      <h3>{course.title}</h3>

      <p>{course.description}</p>

      <div className="course-footer">
        <span>{course.duration}</span>

        <button onClick={() => onLearnMore(course)}>Learn More →</button>
      </div>
    </div>
  );
}

export default CourseCard;
