import React, { use } from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard";

const Reviews = ({ reviewsPromise }) => {
  const reviews = use(reviewsPromise);

  return (
    <div className="my-24">
      <div className="text-center mb-20 w-11/12 md:w-full mx-auto">
        <h2 className="text-3xl text-center font-bold text-secondary">
          Review
        </h2>
        <p className="opacity-65">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
          dolor similique minus, nam cum dolores deserunt neque laudantium
          eiusbr
          <br />
          voluptate excepturi voluptates nesciunt accusamus magni et nisi
          pariatur obcaecati itaque?
        </p>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 30,
          stretch: "50%",
          depth: 200,
          modifier: 1,
          scale: 0.75,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <ReviewCard review={review}></ReviewCard>
          </SwiperSlide>
        ))}
      </Swiper>
      ;
    </div>
  );
};

export default Reviews;
