import React from "react";
import Banner from "../Banner/Banner";
import Work from "../Work/Work";
import OurService from "../OurService/OurService";
import Brands from "../Brands/Brands";
import Reviews from "../Reviews/Reviews";
import ParcelService from "../ParcelService/ParcelService";

const reviewsPromise = fetch("/reviews.json").then((res) => res.json());

const Home = () => {
  return (
    <div>
      <div className="my-5">
        <Banner />
      </div>

      <div className="my-5">
        <Work />
      </div>

      <div className="my-5">
        <OurService />
      </div>

      <div className="my-25">
        <Brands />
      </div>
     
      <div className="my-25">
        <ParcelService />
      </div>

      <div className="my-25">
        <Reviews reviewsPromise={reviewsPromise} />
      </div>
    </div>
  );
};

export default Home;
