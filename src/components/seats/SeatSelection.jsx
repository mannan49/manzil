import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const SeatSelection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const initialBusData =
    location.state?.bus || JSON.parse(localStorage.getItem("busData"));

  const [busData, setBusData] = useState(initialBusData);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentSeat, setCurrentSeat] = useState(null);

  // Save busData to localStorage
  useEffect(() => {
    if (busData && Object.keys(busData).length > 0) {
      localStorage.setItem("busData", JSON.stringify(busData));
    }
  }, [busData]);

  const handleSeatClick = (seat) => {
    if (
      !seat.booked &&
      !selectedSeats.some((s) => s.seatNumber === seat.seatNumber)
    ) {
      // Show modal to confirm seat
      setCurrentSeat(seat);
      setShowModal(true);
    }
  };

  const handleInputChange = (field, value) => {
    setCurrentSeat((prevSeat) => ({
      ...prevSeat,
      [field]: value,
    }));
  };

//  const handleConfirmSeat = () => {
//     if (currentSeat.name && currentSeat.gender) {
//       // Add the seat to selected seats
//       setSelectedSeats([
//         ...selectedSeats,
//         { ...currentSeat, name: currentSeat.name, gender: currentSeat.gender },
//       ]);
//       setShowModal(false); // Close the modal
//     } else {
//       alert("Please fill in both name and gender.");
//     }
//   };
 
  const handleProceedToPayment = () => {
    // Ensure all fields are filled
    const allFieldsFilled = selectedSeats.every(
      (seat) => seat.name && seat.gender
    );
    if (allFieldsFilled) {
      // Pass selectedSeats to payment page
      navigate("/payments", { state: { reservedSeats: selectedSeats } });
    } else {
      alert("Please fill in all details for each selected seat.");
    }
  };

  const handleCancel = () => {
    setBusData(null);
    localStorage.removeItem("busData");
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center mt-10 pb-8">
      <div className="bg-primary py-2 px-6 rounded-lg">
        <h2 className="text-2xl text-white text-center font-bold mb-6">
          Bus Seat Booking
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {busData?.seats.map((seat, index) => {
            if (index % 2 === 0) {
              const nextSeat = busData.seats[index + 1];
              return (
                <div key={seat.seatNumber} className="flex space-x-2">
                  <Seat seat={seat} onClick={() => handleSeatClick(seat)} />
                  {nextSeat && (
                    <Seat
                      seat={nextSeat}
                      onClick={() => handleSeatClick(nextSeat)}
                    />
                  )}
                </div>
              );
            }
            return null;
          })}
        </div>

        {/* Selected Seat Forms */}
        {selectedSeats.length > 0 && (
          <div className="mt-6">
            {selectedSeats.map((seat, index) => (
              <div
                key={seat.seatNumber}
                className="mb-4 p-4 bg-gray-200 rounded"
              >
                <h3 className="font-bold mb-2">
                  Seat {seat.seatNumber} Details
                </h3>
                <input
                  type="text"
                  placeholder="Name"
                  value={seat.name}
                  onChange={(e) =>
                    handleInputChange(index, "name", e.target.value)
                  }
                  className="border p-2 rounded mb-2 w-full"
                />
                <select
                  value={seat.gender}
                  onChange={(e) =>
                    handleInputChange(index, "gender", e.target.value)
                  }
                  className="border p-2 rounded w-full"
                >
                  <option value="">Select Gender</option>
                  <option value="M">Male</option>
                  <option value="F">Female</option>
                </select>
              </div>
            ))}
            <button
              onClick={handleProceedToPayment}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500"
            >
              Proceed to Payment Page
            </button>
          </div>
        )}

        <button
          onClick={handleCancel}
          className="mt-8 px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700"
        >
          Cancel
        </button>
      </div>

      {/* Modal for seat confirmation */}
      {showModal && currentSeat && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10">
          <div className="bg-white p-6 rounded-lg w-80">
            <h3 className="font-bold mb-4 text-center">
              Confirm Seat {currentSeat.seatNumber}
            </h3>
            <div className="mb-4">
              <label className="block mb-2">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                value={currentSeat.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="border p-2 rounded w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Gender</label>
              <select
                value={currentSeat.gender}
                onChange={(e) => handleInputChange("gender", e.target.value)}
                className="border p-2 rounded w-full"
              >
                <option value="">Select Gender</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
              </select>
            </div>
            <div className="flex justify-between">
              <button
                onClick={handleProceedToPayment}
                className="px-4 py-2 bg-blue-600 text-white rounded-md"
              >
                Confirm
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-400 text-white rounded-md"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Seat = ({ seat, onClick }) => {
  const seatColor = seat.booked ? "bg-red-200" : "bg-gray-300";
  const seatCursor = seat.booked ? "cursor-not-allowed" : "cursor-pointer";

  return (
    <div
      className={`w-12 h-12 flex items-center justify-center font-bold rounded ${seatColor} ${seatCursor}`}
      onClick={onClick}
    >
      {seat.booked
        ? seat.gender === "M"
          ? "M"
          : "F"
        : parseInt(seat.seatNumber.split("-")[1]) + 1}
    </div>
  );
};

export default SeatSelection;
