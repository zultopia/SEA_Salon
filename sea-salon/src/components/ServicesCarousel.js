import React from 'react';
import Slider from 'react-slick';
import './ServicesCarousel.css';
import Photocard1 from '../assets/Photocard1.jpeg';
import Photocard2 from '../assets/Photocard2.png';
import Photocard3 from '../assets/Photocard3.jpeg';
import Photocard4 from '../assets/Photocard4.jpeg';

const ServicesCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <div className="arrow-next">→</div>,
    prevArrow: <div className="arrow-prev">←</div>,
  };

  return (
    <div className="carousel-container">
      <h2>OUR SERVICES</h2>
      <Slider {...settings}>
        <div className="card">
          <img src={Photocard1} alt="Haircuts and Styling" className="card-image" />
          <div className="card-text">Haircuts and Styling</div>
        </div>
        <div className="card">
          <img src={Photocard2} alt="Manicure and Pedicure" className="card-image" />
          <div className="card-text">Manicure and Pedicure</div>
        </div>
        <div className="card">
          <img src={Photocard3} alt="Facial Treatments" className="card-image" />
          <div className="card-text">Facial Treatments</div>
        </div>
        <div className="card">
          <img src={Photocard4} alt="Additional" className="card-image" />
          <div className="card-text">Additional</div>
        </div>
      </Slider>
    </div>
  );
};

export default ServicesCarousel;