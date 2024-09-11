import React from "react";
import { FaPlane } from "react-icons/fa"; // Replace with any needed icon
// import "./TicketCard.css";

const TicketCard = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-center bg-cover">
      <div className="absolute z-0"></div>
      <div className="max-w-md w-full h-full mx-auto z-10  rounded-3xl">
        <div className="flex flex-col">
          <div className="bg-main relative drop-shadow-2xl rounded-3xl p-4 m-4">
            <div className="flex-none sm:flex">
              <div className="relative h-32 w-32 sm:mb-0 mb-3 hidden">
                <span className="absolute -right-2 bottom-2 text-white p-1 text-xs bg-tertiary hover:bg-tertiary font-medium tracking-wider rounded-full transition ease-in duration-300">
                  <FaPlane className="h-4 w-4" />
                </span>
              </div>
              <div className="flex-auto justify-evenly">
                <div className="flex items-center justify-between">
                  <div className="flex items-center my-1">
                    <span className="mr-3 rounded-full bg-main w-8 h-8">
                      <img
                        src="https://e7.pngegg.com/pngimages/566/606/png-clipart-bus-bus-thumbnail.png"
                        className="h-8 p-1"
                        alt="AirIndia Logo"
                      />
                    </span>
                    <h2 className="font-medium italic">Manzil</h2>
                  </div>
                  <div className="ml-auto text-secondary">A380</div>
                </div>
                <div className="border-b border-dashed border-b-2 my-5"></div>
                <div className="flex items-center">
                  <div className="flex flex-col">
                    <div className="flex-auto text-xs text-ternary my-1">
                      <span className="mr-1">MO</span>
                      <span>19 22</span>
                    </div>
                    <div className="w-full flex-none text-lg text-secondary font-bold leading-none">
                      FSD
                    </div>
                    <div className="text-xs">Faisalabad</div>
                  </div>
                  <div className="flex flex-col mx-auto">
                    <img
                      src="https://e7.pngegg.com/pngimages/566/606/png-clipart-bus-bus-thumbnail.png"
                      className="w-20 p-1"
                      alt="AirIndia Icon"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex-auto text-xs text-ternary my-1">
                      <span className="mr-1">MO</span>
                      <span>19 22</span>
                    </div>
                    <div className="w-full flex-none text-lg text-secondary font-bold leading-none">
                      LHR
                    </div>
                    <div className="text-xs">Lahore</div>
                  </div>
                </div>
                <div className="border-b border-dashed border-b-2 my-5 pt-5 relative">
                  <div className="absolute rounded-full w-5 h-5 bg-primary -mt-2 -left-2"></div>
                  <div className="absolute rounded-full w-5 h-5 bg-primary -mt-2 -right-2"></div>
                </div>
                <div className="flex items-center mb-5 p-5 text-sm">
                  <div className="flex flex-col">
                    <span className="text-sm">Bus</span>
                    <div className="font-semibold">FDV-380</div>
                  </div>
                  <div className="flex flex-col ml-auto">
                    <span className="text-sm">Gate</span>
                    <div className="font-semibold">B3</div>
                  </div>
                </div>
                <div className="flex items-center mb-4 px-5">
                  <div className="flex flex-col text-sm">
                    <span>Board</span>
                    <div className="font-semibold">11:15AM</div>
                  </div>
                  <div className="flex flex-col mx-auto text-sm">
                    <span>Departs</span>
                    <div className="font-semibold">11:30Am</div>
                  </div>
                  <div className="flex flex-col text-sm">
                    <span>Arrived</span>
                    <div className="font-semibold">2:00PM</div>
                  </div>
                </div>
                <div className="border-b border-dashed border-b-2 my-5 pt-5 relative">
                  <div className="absolute rounded-full w-5 h-5 bg-primary -mt-2 -left-2"></div>
                  <div className="absolute rounded-full w-5 h-5 bg-primary -mt-2 -right-2"></div>
                </div>
                <div className="flex items-center px-5 pt-3 text-sm">
                  <div className="flex flex-col">
                    <span>Passenger</span>
                    <div className="font-semibold">Babar Azam</div>
                  </div>
                  <div className="flex flex-col mx-auto">
                    <span>Class</span>
                    <div className="font-semibold">Economic</div>
                  </div>
                  <div className="flex flex-col">
                    <span>Seat</span>
                    <div className="font-semibold">12 E</div>
                  </div>
                </div>
                <div className="flex flex-col py-5 justify-center text-sm">
                  <h6 className="text-ternary text-center text-sm">
                    Show this to driver in the bus
                  </h6>
                  <div className="barcode h-14 w-0 inline-block mt-4 relative left-auto"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
