import React from "react";

const OurServiceCard = ({service}) => {
  const { image, title, description } = service;
  return (
    <div className="bg-white hover:bg-[#CAEB66] rounded-2xl px-8 py-4 space-y-4 text-center">
      <img className="flex justify-center mx-auto bg-[#EEEDFC] rounded-full p-5" src={image} alt="Logo" />
      <h2 className="text-secondary text-2xl font-bold">{title}</h2>
      <p className="opacity-70">{description}</p>
    </div>
  );
};

export default OurServiceCard;
