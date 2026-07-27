import "./Register.css";
import courses from "../data/courses";

function Register() {
  return (
    <>
      <section className="register-hero">
        <div className="container">
          <span className="section-subtitle">Join TEDOJO</span>

          <h1>
            Become the Leader
            <br />
            You Were Meant to Be
          </h1>

          <p>
            Begin your journey with TEDOJO and develop the discipline,
            confidence, resilience, and leadership to thrive.
          </p>
        </div>
      </section>

      <section className="registration-journey">
        <div className="container">
          <span className="section-subtitle">Your Journey</span>

          <h2 className="section-title">Three Simple Steps</h2>

          <div className="journey-flow">
            <div className="journey-step">
              <div className="step-circle">1</div>

              <h3>Complete Registration</h3>

              <p>
                Fill out the registration form with your details and preferred
                course.
              </p>
            </div>

            <div className="journey-arrow">→</div>

            <div className="journey-step">
              <div className="step-circle">2</div>

              <h3>We'll Contact You</h3>

              <p>
                Our team will review your registration and reach out with the
                next steps.
              </p>
            </div>

            <div className="journey-arrow">→</div>

            <div className="journey-step">
              <div className="step-circle">3</div>

              <h3>Begin Your Training</h3>

              <p>
                Start your TEDOJO journey and build confidence, discipline, and
                leadership.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="register-section">
        <div className="container">
          <div className="register-header">
            <span className="section-subtitle">Start Your Journey</span>

            <h2>Register for TEDOJO</h2>

            <p>
              Tell us a little about yourself and the programme you're
              interested in. Our team will be in touch with you shortly.
            </p>
          </div>

          <form className="register-form">
            {/* Personal Information */}
            <fieldset>
              <legend>Personal Information</legend>

              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="fullName">Full Name</label>

                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>

                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="dateOfBirth">Date of Birth</label>

                  <input id="dateOfBirth" type="date" name="dateOfBirth" />
                </div>
              </div>
            </fieldset>

            {/* Training Information */}
            <fieldset>
              <legend>Training Information</legend>

              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="course">Choose a Course</label>

                  <select id="course" name="course" defaultValue="">
                    <option value="" disabled>
                      Select a course
                    </option>

                    {courses.map((course) => (
                      <option key={course.id} value={course.title}>
                        {course.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="experience">Experience Level</label>

                  <select id="experience" name="experience" defaultValue="">
                    <option value="" disabled>
                      Select your experience
                    </option>

                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="schedule">Preferred Schedule</label>

                  <select id="schedule" name="schedule" defaultValue="">
                    <option value="" disabled>
                      Select a schedule
                    </option>

                    <option value="weekdays">Weekdays</option>
                    <option value="weekends">Weekends</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>
            </fieldset>

            {/* Goals */}
            <fieldset>
              <legend>Your Goals</legend>

              <div className="form-group">
                <label htmlFor="goals">
                  What would you like to achieve through TEDOJO?
                </label>

                <textarea
                  id="goals"
                  name="goals"
                  rows="6"
                  placeholder="Tell us about your goals, expectations, or what you'd like to develop..."
                />
              </div>
            </fieldset>

            {/* Emergency Contact */}
            <fieldset>
              <legend>Emergency Contact</legend>

              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="emergencyName">Emergency Contact Name</label>

                  <input
                    id="emergencyName"
                    type="text"
                    name="emergencyName"
                    placeholder="Enter contact name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="emergencyPhone">
                    Emergency Contact Number
                  </label>

                  <input
                    id="emergencyPhone"
                    type="tel"
                    name="emergencyPhone"
                    placeholder="Enter contact number"
                  />
                </div>
              </div>
            </fieldset>

            {/* Submit */}
            <button type="submit" className="register-submit">
              Begin My TEDOJO Journey →
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
export default Register;
