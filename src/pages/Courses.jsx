import { useState } from "react";

import courses from "../data/courses";

import CourseCard from "../components/Courses/CourseCard/CourseCard";
import "./Courses.css";
import CourseModal from "../components/Courses/CourseModal/CourseModal";

function Courses() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <>
      <section className="courses-hero">
        <div className="container">
          <span>TEDOJO Courses</span>

          <h1>Master Discipline. Develop Leadership.</h1>

          <p>
            Discover executive martial arts programs designed to build
            confidence, resilience, and leadership.
          </p>
        </div>
      </section>
      <section className="courses-section">
        <div className="container">
          <div className="courses-grid">
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onLearnMore={setSelectedCourse}
              />
            ))}
          </div>
        </div>
      </section>
      {selectedCourse && (
        <CourseModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
        />
      )}
    </>
  );
}

export default Courses;
