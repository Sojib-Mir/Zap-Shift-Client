import React from "react";
import WorkCard from "./WorkCard";
import logo from "../../../assets/delivery-van.png";

const Work = () => {
  const cards = [
    {
      id: 1,
      image: logo,
      title: "Booking Pick & Drop",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      id: 2,
      image: logo,
      title: "Cash On Delivery",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      id: 3,
      image: logo,
      title: "Delivery Hub",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      id: 4,
      image: logo,
      title: "Booking SME & Corporate",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
  ];
  
  return (
    <div className="my-20 w-11/12 mx-auto">
      <h1 className="text-secondary text-3xl font-bold mb-5">How it Works</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {cards.map((card) => (
          <WorkCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Work;
