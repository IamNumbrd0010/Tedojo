import Hero from "../components/Home/Hero/Hero";

import Container from "../components/UI/Container";
import WhyTedojo from "../components/WhyTedojo";

import Programmes from "../components/Home/Programmes/Programmes";
import Journey from "../components/Home/Journey/Journey";

import Testimonials from "../components/Home/Testimonials/Testimonials";
import Gallery from "../components/Home/Gallery/Gallery";
import CTA from "../components/Home/CTA/CTA";

function Home() {
  return (
    <>
      <Container>
        <Hero />
        <WhyTedojo />
        <Programmes />
        <Journey />
        <Testimonials />
        <Gallery />
        <CTA />
      </Container>
    </>
  );
}

export default Home;
