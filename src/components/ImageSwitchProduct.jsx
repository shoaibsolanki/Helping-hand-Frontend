import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


const ImageSwitchProduct = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = swiperRef.current?.swiper;
    const interval = setInterval(() => {
      if (swiper) {
        swiper.slideNext();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const images = [
    "/13.jpg",
    "/28.jpg",
    "/29.jpg",
  ];

  const swiperStyles = {
    marginBottom: "50px",
    borderRadius: "8px",
    overflow: "hidden",
  };

  const imgContainerStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width:"100%"
  };

  const imgStyles = {
    maxWidth: "100%",
    Width: "100%",
    height: "auto",
    objectFit: "cover",
    borderRadius: "8px",
  };

  const autoplayOptions = {
    delay: 3000,
    disableOnInteraction: false,
  };

  return (
    <Swiper
      ref={swiperRef}
      spaceBetween={30}
      centeredSlides={true}
      loop={true}
      className="mySwiper w-full lg:h-auto mt-3 rounded-5"
      style={swiperStyles}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div style={imgContainerStyles}>
            <img
              src={image}
              className="rounded-3 rounded-3xl"
              alt={`Slide ${index + 1}`}
              style={imgStyles}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSwitchProduct;
