import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Container from "./components/UI/Container";
import WhyTedojo from "./components/WhyTedojo";

import Footer from "./components/Footer";
import Programmes from "./components/Programmes/Programmes";
import Journey from "./components/Journey/Journey";
import testimonials from "./data/testimonials";
import TestimonialCard from "./components/TestimonialCard/TestimonialCard";
import Testimonials from "./components/Testimonials/Testimonials";
import Gallery from "./components/Gallery/Gallery";
function App() {
  return (
    <>
      <Navbar />

      <Container>
        <Hero />
        <WhyTedojo />
        <Programmes />
        <Journey />
        <Testimonials />
        <Gallery />
      </Container>
      <Footer />
    </>
  );
}

export default App;
