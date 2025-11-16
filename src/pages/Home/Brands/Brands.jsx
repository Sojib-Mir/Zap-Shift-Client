import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import amzon from "../../../assets/brands/amazon.png";
import amazonVector from "../../../assets/brands/amazon_vector.png";
import casio from "../../../assets/brands/casio.png";
import moonstar from "../../../assets/brands/moonstar.png";
import randstad from "../../../assets/brands/randstad.png";
import star from "../../../assets/brands/star.png";
import startPeople from "../../../assets/brands/start_people.png";
import { Autoplay } from "swiper/modules";

const brandLogos = [
  amzon,
  amazonVector,
  casio,
  moonstar,
  randstad,
  star,
  startPeople,
  amzon,
  amazonVector,
  casio,
  moonstar,
  randstad,
  star,
  startPeople,
];

const Brands = () => {
  return (
    <>
      <div className="my-20">
        <h2 className="font-bold text-4xl text-center text-secondary">
          We've helped thousands of sales teams
        </h2>
      </div>
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        centeredSlides={true}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {brandLogos.map((logo, index) => (
          <SwiperSlide key={index}>
            <img src={logo} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Brands;
