import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import "../../assets/scss/components/testimonial.scss"
const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

const testimonials = [
    {
      id: 1,
      quote: "Mahashakti Engineering delivered exceptional building machines that exceeded our expectations. Their attention to detail and quality is unmatched.",
      name: "Rajesh Kumar",
      position: "Construction Manager",
      company: "ABC Builders",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      bgColor: "from-blue-50 to-indigo-100"
    },
    {
      id: 2,
      quote: "The engineering expertise and manufacturing quality provided by Mahashakti Engineering has been instrumental in our project success.",
      name: "Priya Sharma",
      position: "Project Director",
      company: "XYZ Infrastructure",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      bgColor: "from-purple-50 to-pink-100"
    },
    {
      id: 3,
      quote: "Outstanding service and innovative solutions. Mahashakti Engineering is our trusted partner for all manufacturing needs.",
      name: "Amit Patel",
      position: "CEO",
      company: "Industrial Solutions Ltd",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      bgColor: "from-green-50 to-emerald-100"
    },
    {
      id: 4,
      quote: "Incredible precision and reliability in every machine they produce. Their customer service is always responsive and helpful.",
      name: "Sunita Gupta",
      position: "Operations Head",
      company: "Metro Construction Co.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      bgColor: "from-orange-50 to-red-100"
    },
    {
      id: 5,
      quote: "Their innovative approach and cutting-edge technology have transformed our manufacturing processes completely.",
      name: "Vikram Singh",
      position: "Technical Director",
      company: "BuildTech Industries",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      bgColor: "from-cyan-50 to-blue-100"
    },
    {
      id: 6,
      quote: "Working with Mahashakti Engineering has been a game-changer for our construction projects. Highly recommended!",
      name: "Neha Joshi",
      position: "Project Manager",
      company: "Urban Developers",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      bgColor: "from-teal-50 to-green-100"
    }
  ];

  const cardsPerView = {
    mobile: 1,
    tablet: 2,
    desktop: 3
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const maxIndex = testimonials.length - cardsPerView.desktop;
        return prevIndex >= maxIndex ? 0 : prevIndex + 1;
      });
    }, 3500);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - cardsPerView.desktop : prevIndex - 1
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = testimonials.length - cardsPerView.desktop;
      return prevIndex >= maxIndex ? 0 : prevIndex + 1;
    });
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const renderStars = (rating) =>
    Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={14}
        className={index < rating ? 'text-warning fill-current' : 'text-secondary'}
      />
    ));

  return (
    <section className="testimonial-section py-5">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-4">
          <div className="badge bg-primary-subtle text-primary mb-2">
            <Star size={14} className="me-1" />
            Client Testimonials
          </div>
          <h2 className="display-6">
            What Our <span className="text-gradient">Clients</span> Say
          </h2>
          <p className="text-muted mx-auto w-75">
            Discover why hundreds of companies trust Mahashakti Engineering
          </p>
        </div>

        {/* Slider */}
        <div className="position-relative">
          <div className="overflow-hidden">
            <div
              className="d-flex transition-slide"
              style={{ transform: `translateX(-${currentIndex * (100 / cardsPerView.desktop)}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="col-12 col-md-6 col-lg-4 px-2 flex-shrink-0"
                >
                  <div className={`testimonial-card bg-${testimonial.bgColor}`}>
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <Quote size={20} className="text-primary opacity-75" />
                      <div className="d-flex gap-1">{renderStars(testimonial.rating)}</div>
                    </div>
                    <blockquote className="text-muted small mb-4">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="d-flex align-items-center gap-2 mt-auto">
                      <div className="avatar-wrapper position-relative">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="rounded-circle border border-white shadow avatar-img"
                        />
                        <span className="status-indicator bg-success border border-white" />
                      </div>
                      <div>
                        <h6 className="mb-0 small">{testimonial.name}</h6>
                        <small className="text-muted d-block">
                          {testimonial.position} <br />
                          <span className="text-primary">{testimonial.company}</span>
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <button onClick={goToPrevious} className="btn btn-light slider-nav left">
            <ChevronLeft size={16} />
          </button>
          <button onClick={goToNext} className="btn btn-light slider-nav right">
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Dots & Stats */}
        <div className="d-flex flex-column align-items-center mt-4 gap-3">
          <div className="d-flex gap-2">
            {Array.from({ length: testimonials.length - cardsPerView.desktop + 1 }, (_, index) => (
              <button
                key={index}
                className={`indicator-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                  setTimeout(() => setIsAutoPlaying(true), 5000);
                }}
              />
            ))}
          </div>
          <div className="d-flex justify-content-center gap-4 text-center">
            <div>
              <h5 className="text-primary mb-0">500+</h5>
              <small className="text-muted">Happy Clients</small>
            </div>
            <div className="vr" />
            <div>
              <h5 className="text-purple mb-0">4.9</h5>
              <small className="text-muted">Average Rating</small>
            </div>
            <div className="vr" />
            <div>
              <h5 className="text-success mb-0">10+</h5>
              <small className="text-muted">Years Experience</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
