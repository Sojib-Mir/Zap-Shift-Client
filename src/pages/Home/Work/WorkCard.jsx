import React from "react";

const WorkCard = ({ card }) => {
  const { title, description, image } = card;
  return (
    <div className="bg-white rounded-2xl px-8 py-4 space-y-4">
      <img src={image} alt="Logo" />
      <h2 className="text-secondary text-2xl font-bold">{title}</h2>
      <p className="opacity-70">{description}</p>
    </div>
  );
};

export default WorkCard;
