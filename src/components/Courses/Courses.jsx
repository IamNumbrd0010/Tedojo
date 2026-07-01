import { useState } from "react";
import "./Courses.css";
import CourseCard from "./CourseCard";
import CourseModal from "./CourseModal";

function Courses() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = [
    {
      id: 1,
      title: "Executive Self Defence",
      level: "Beginner",
      duration: "6 Weeks",
      description: "Learn practical self-defence for real-world situations."
    },
    {
      id: 2,
      title: "Leadership Through Martial Arts",
      level: "Intermediate",
      duration: "8 Weeks",
      description: "Develop leadership, discipline, and decision-making under pressure."
    },
    {
      id: 3,
      title: "Corporate Conflict Control",
      level: "Advanced",
      duration: "10 Weeks",
      description: "Master emotional control and conflict de-escalation in business environments."
    }
  ];

  return (
    <section className="courses">
      <h2>Our Courses</h2>

      <div className="courses-grid">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onClick={() => setSelectedCourse(course)}
          />
        ))}
      </div>

      {selectedCourse && (
        <CourseModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
        />
      )}
    </section>
  );
}

export default Courses;