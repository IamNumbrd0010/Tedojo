import "./Testimonials.css";
import SectionTitle from "../UI/SectionTitle/SectionTitle";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import testimonials from "../../data/testimonials";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Button from "../UI/Button";

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <SectionTitle
          subtitle="Success Stories"
          title="Trusted by Leaders"
          description="Hear how TEDOJO has helped executives develop confidence, resilience and leadership."
        />

        {/* <div className="testimonial-navigation">
          <button className="testimonial-prev">←</button>

          <button className="testimonial-next">→</button>
        </div> */}
        <div className="testimonial-slider testimonial-navigation">
          <button className="testimonial-prev">←</button>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={3}
            centeredSlides={true}
            loop={true}
            spaceBetween={45}
            speed={900}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              prevEl: ".testimonial-prev",
              nextEl: ".testimonial-next",
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },

              768: {
                slidesPerView: 2,
              },

              1200: {
                slidesPerView: 3,
              },
            }}>
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="testimonial-next">→</button>
        </div>

        <div className="testimonial-button">
          <Button variant="gold">Explore Success Stories →</Button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
