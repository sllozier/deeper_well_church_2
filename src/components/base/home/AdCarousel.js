import React from "react";
import Slider from "react-slick";

const AdCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <>
      <div className="container slider has-background-danger">
        <Slider {...settings}>
          <figure className="image is-3by1">
            <img src="/piccies/albumPiccies/sales1.svg" />
          </figure>
          <figure className="image is-3by1">
            <img src="/piccies/albumPiccies/sales2.svg" />
          </figure>
          <figure className="image is-3by1">
            <img src="/piccies/albumPiccies/sales3.svg" />
          </figure>
          <figure className="image is-3by1">
            <img src="/piccies/albumPiccies/sales4.svg" />
          </figure>
        </Slider>
      </div>
    </>
  );
};

export default AdCarousel;
