import React from "react";
import TicketCard from "../components/utils/TicketCard";

const BookingPage = () => {
  return (
    <div className="content flex flex-col">
      <div className="mt-3 flex justify-center items-center gap-1">
        <button className="app-btn hover:bg-tertiary hover:text-primary ">
          Active
        </button>
        <button className="app-btn hover:bg-tertiary hover:text-primary ">
          Completed
        </button>
        <button className="app-btn hover:bg-tertiary hover:text-primary ">
          Cancelled
        </button>
      </div>
      <TicketCard />
      <div className="flex flex-col justify-center items-center p-4">
        <h1 className="text-xl mb-2 font-bold">Track Your Bus</h1>
        <img
          className="rounded-2xl border-ternary"
          src="https://th.bing.com/th/id/OIP.eCUAbMMGWhCsGJV0uGsCxQHaE8?rs=1&pid=ImgDetMain"
        />
      </div>
    </div>
  );
};

export default BookingPage;
