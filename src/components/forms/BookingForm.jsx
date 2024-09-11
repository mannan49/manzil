import React from "react";
import {
  FaPersonWalkingLuggage,
  FaBus,
  FaPersonWalkingArrowRight,
} from "react-icons/fa6";
import { BsCalendar } from "react-icons/bs";

const BookingForm = () => {
  return (
    <div>
      <h1 className="text-center font-bold">Let's Book a Ride</h1>
      <form>
        <div className="flex flex-col space-y-6 mt-4 px-4 py-10 bg-main shadow-md rounded-3xl lg:w-1/2 mx-auto">
          <div className="flex items-center border border-ternary_light rounded-md p-2 bg-white ">
            <div className="px-1 flex justify-center items-center gap-1">
              <FaBus />
              <FaPersonWalkingLuggage />
            </div>
            <input
              type="text"
              placeholder="from"
              className="w-full px-2 bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none"
            />
          </div>
          <div className="flex items-center border border-ternary_light rounded-md p-2 bg-white">
            <div className="px-1 flex justify-center items-center gap-2">
              <FaBus />
              <FaPersonWalkingArrowRight />
            </div>
            <input
              type="text"
              placeholder="to"
              className="w-full px-2 bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none"
            />
          </div>
          <div className="flex items-center border border-ternary_light rounded-md p-2 bg-white">
            <div className="px-2 flex justify-center items-center">
              <BsCalendar />
              <BsCalendar className="opacity-0" />
            </div>
            <input
              type="date"
              placeholder="date"
              className="w-full px-2 bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none"
            />
          </div>

          <button className="app-btn">Search Buses</button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
