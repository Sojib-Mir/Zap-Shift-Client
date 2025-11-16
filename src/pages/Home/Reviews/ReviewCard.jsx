import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  const { userName, review: testimonial, user_photoURL } = review;

  return (
    <div className="max-w-sm mx-auto p-6 rounded-2xl bg-white shadow border border-gray-100 ">
      <div className="text-teal-400 text-3xl mb-2">
        <FaQuoteLeft />
      </div>

      <p className="mb-6">{testimonial}</p>

      <div className="border-t border-dashed border-gray-300 my-4"></div>

      <div className="flex items-center gap-3 mt-4">
        <div className="w-10 h-10 rounded-full bg-teal-900">
          <img className="rounded-full" src={user_photoURL} alt="" />
        </div>
        <div>
          <h3 className="font-semibold text-teal-900">{userName}</h3>
          <p className=" text-sm">Senior Product Designer</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
