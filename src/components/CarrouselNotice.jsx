import "./CarrouselNotice.css";
import { useState } from "react";
import Slider from "react-slick";
import astronaut from "../assets/astronaut.png";
import celebrating from "../assets/celebrating.png";
import education from "../assets/education.png";
import taken from "../assets/taken.png";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const images = [astronaut, celebrating, education, taken];

function CarrouselNoticias() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyload: true,
    speed: 300,
    slidesToShow: 3,
    centerModel: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="CarrouselNoticias">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div
            className={idx === imageIndex ? "Desliza activeDesliza" : "Desliza"}
          >
            <img src={img} alt={img} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CarrouselNoticias;
