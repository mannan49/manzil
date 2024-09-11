import React from "react";
import { FaArrowRight } from "react-icons/fa";

const RouteCard = ({ origin, destination, price, imageSrc }) => {
  return (
    <div className="bg-main mt-2 p-3 shadow-md rounded-xl">
      <div className="grid grid-cols-[35%_65%] md:grid-cols-2 items-center">
        <img className="rounded-md" src={imageSrc} alt={destination} />
        <div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-center items-center ml-4">
              <p className="text-xs md:text-lg">{origin}</p>
              <FaArrowRight className="mx-1" />
              <p className="text-xs md:text-lg">{destination}</p>
            </div>
            <div className="ml-4 flex flex-col justify-center items-center">
              <p className="text-tertiary">Only in</p>
              <p className="font-bold">Rs. {price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouteCard;
