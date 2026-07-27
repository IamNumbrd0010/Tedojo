import AboutHero from "../components/About/AboutHero/AboutHero";
import MissionVision from "../components/About/MissionVision/MissionVision";
import Story from "../components/About/Story/Story";
import Benefits from "../components/About/Benefits/Benefits";
import Philosophy from "../components/About/Philosophy/Philosophy";
import CoreValues from "../components/About/CoreValues/CoreValues";
import Founder from "../components/About/Founder/Founder";
import FAQ from "../components/About/FAQ/FAQ";
import CTA from "../components/Home/CTA/CTA";

function About() {
  return (
    <>
      <AboutHero />
      <Story />
      <MissionVision />
      <Benefits />
      <Philosophy />
      <CoreValues />
      <Founder />
      <FAQ />
      <CTA
        tag="Ready for the Next Step?"
        title={
          <>
            Lead Beyond
            <br />
            The Dojo.
          </>
        }
        description="Join TEDOJO and discover how discipline, resilience, and leadership can transform your personal and professional life."
        primaryButton="Register Now"
        secondaryButton="Explore Courses"
      />
    </>
  );
}

export default About;
