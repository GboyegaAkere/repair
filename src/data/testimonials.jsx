import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <p className="text-gray-600 mb-4">{testimonial.text}</p>
      <div className="flex items-center">
        <img
          src={testimonial.avatar}
          alt="Avatar"
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <p className="font-semibold">{testimonial.author}</p>
          <p className="text-gray-500">{testimonial.position}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialSlider = ({ testimonials }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="mx-auto max-w-2xl mt-8">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index}>
            <TestimonialCard testimonial={testimonial} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      author: "John Doe",
      position: "CEO, Company Inc.",
      avatar: "https://via.placeholder.com/50",
    },
    {
      text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      author: "Jane Smith",
      position: "CTO, Company Inc.",
      avatar: "https://via.placeholder.com/50",
    },
    // Add more testimonials as needed
  ];

  return (
    <section className="bg-gray-100 py-12">
      <h2 className="text-3xl font-semibold text-center mb-8">Testimonials</h2>
      <TestimonialSlider testimonials={testimonials} />
    </section>
  );
};

export default TestimonialsSection;
