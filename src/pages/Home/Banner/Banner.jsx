import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bimg1 from "../../../assets/banner/banner1.png";
import bimg2 from "../../../assets/banner/banner2.png";
import bimg3 from "../../../assets/banner/banner3.png";

const Banner = () => {
  return (
    <Carousel
      className="border border-amber-500 rounded-3xl w-11/12 mx-auto md:w-full"
      autoPlay={true}
      infiniteLoop={true}
    >
      <div>
        <img src={bimg1} />
      </div>
      <div>
        <img src={bimg2} />
      </div>
      <div>
        <img src={bimg3} />
      </div>
    </Carousel>
  );
};

export default Banner;
