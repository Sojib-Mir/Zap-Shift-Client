// import React from "react";

// const ParcelServiceCard = ({ service }) => {
//   const { title, image, description } = service;
//   return (
//     <div className="bg-white flex w-11/12 md:w-full justify-center items-center mx-auto gap-5 p-10 rounded-3xl">
//       <div>
//         <img src={image} alt="" />
//       </div>
//       <div className="devider"></div>
//       <div>
//         <h2 className="font-bold text-secondary text-2xl my-5">{title}</h2>
//         <p className="opacity-80">{description}</p>
//       </div>
//     </div>
//   );
// };

// export default ParcelServiceCard;

import React from "react";
import { FaMapMarkerAlt, FaTruck, FaClock } from "react-icons/fa";

// ParcelCard.jsx
// Tailwind + DaisyUI card that matches the provided design (left illustration, right text).
// Usage: place <ParcelCard /> inside your React app. Make sure Tailwind + DaisyUI are configured.
// The illustration in the example references the local image path used in this conversation;
// replace the `src` with your own image path or SVG if needed.

const ParcelServiceCard = ({ service }) => {
  const { title, image, description } = service;
  return (
    <div className="w-11/12 md:w-full mx-auto my-3">
      <div className="card bg-base-100 shadow-sm border border-gray-100 hover:bg-sky-400/10">
        <div className="flex items-center gap-8 p-6">
          {/* Left illustration area */}
          <div className="flex items-center justify-center">
            <img
              src={image}
              alt="parcel illustration"
              className="object-contain w-full h-full"
            />
          </div>

          {/* Vertical dashed separator for medium and up */}
          <div className="hidden md:block h-24 border-r-2 border-dashed border-gray-200" />

          {/* Right content */}
          <div className="flex-1">
            <h3 className="text-xl md:text-3xl font-semibold text-secondary">
              {title}
            </h3>
            <p className="text-sm md:text-base text-gray-500 mt-2">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParcelServiceCard;
