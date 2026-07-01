import "./Courses.css";

function CourseCard({ course, onClick }) {
  return (
    <div className="course-card" onClick={onClick}>
      <h3>{course.title}</h3>
      <p>{course.level}</p>
      <p>{course.duration}</p>
    </div>
  );
}

export default CourseCard;
