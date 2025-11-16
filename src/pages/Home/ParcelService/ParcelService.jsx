import React from "react";
import parcel from "../../../assets/live-tracking.png";
import delivary from "../../../assets/safe-delivery.png";
import ParcelServiceCard from "./ParcelServiceCard";

const ParcelService = () => {
  const services = [
    {
      id: 1,
      image: parcel,
      title: "Live Parcel Tracking",
      description:
        "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    },
    {
      id: 2,
      image: delivary,
      title: "100% Safe Delivery",
      description:
        "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    },
    {
      id: 3,
      image: delivary,
      title: "24/7 Call Center Support",
      description:
        "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    },
  ];
  return (
    <div className="">
      {services.map((service) => (
        <ParcelServiceCard
          key={service.id}
          service={service}
        ></ParcelServiceCard>
      ))}
    </div>
  );
};

export default ParcelService;
