import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { apiBaseUrl } from "../api/settings";

const BookingForm = () => {
  const navigate = useNavigate();
  const [buses, setBuses] = useState([]);
  const [filteredBuses, setFilteredBuses] = useState([]);
  const [cities, setCities] = useState([]);
  const [formData, setFormData] = useState({
    fromCity: "",
    toCity: "",
    date: "",
  });

  // Fetch buses from API
  useEffect(() => {
    const fetchBuses = async () => {
      try {
        const response = await fetch(`${apiBaseUrl}/bus`);
        const data = await response.json();
        setBuses(data);

        // Extract unique cities from the bus data
        const uniqueCities = Array.from(
          new Set(
            data.flatMap((bus) => [bus.route.startCity, bus.route.endCity])
          )
        );
        setCities(uniqueCities);
      } catch (error) {
        console.error("Error fetching buses:", error);
      }
    };

    fetchBuses();
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Filter buses based on formData (fromCity, toCity, and date)
  const filterBuses = () => {
    const { fromCity, toCity, date } = formData;
    const selectedDate = new Date(date).toISOString().split("T")[0];

    const results = buses.filter((bus) => {
      const busDateString =
        bus.date && bus.date.$date ? bus.date.$date : bus.date;
      const busDate = new Date(busDateString);
      if (isNaN(busDate)) {
        console.error("Invalid bus date:", busDateString);
        return false; // Skip this bus if the date is invalid
      }
      const formattedBusDate = busDate.toISOString().split("T")[0];

      const busStartCity = bus.route.startCity.trim().toLowerCase();
      const busEndCity = bus.route.endCity.trim().toLowerCase();
      const selectedFromCity = fromCity.trim().toLowerCase();
      const selectedToCity = toCity.trim().toLowerCase();

      const citiesMatch =
        busStartCity === selectedFromCity && busEndCity === selectedToCity;
      const datesMatch = formattedBusDate === selectedDate;

      return citiesMatch && datesMatch;
    });
    setFilteredBuses(results);
  };

  // Handle form submission (filter buses)
  const handleSubmit = (e) => {
    e.preventDefault();
    filterBuses();
  };

  return (
    <div>
      <h1 className="text-center font-bold">Let's Book a Ride</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-6 mt-4 px-4 py-10 bg-main shadow-md rounded-3xl lg:w-1/2 mx-auto">
          <div className="flex items-center border border-ternary_light rounded-md p-2 bg-white">
            <select
              name="fromCity"
              value={formData.fromCity}
              onChange={handleInputChange}
              className="w-full px-2 bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none"
            >
              <option value="">Select from</option>
              {cities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          {/* To City Dropdown */}
          <div className="flex items-center border border-ternary_light rounded-md p-2 bg-white">
            <select
              name="toCity"
              value={formData.toCity}
              onChange={handleInputChange}
              className="w-full px-2 bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none"
            >
              <option value="">Select to</option>
              {cities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          {/* Date Input */}
          <div className="flex items-center border border-ternary_light rounded-md p-2 bg-white">
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="w-full px-2 bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none"
              required
            />
          </div>

          {/* Search Button */}
          <button type="submit" className="app-btn">
            Search Buses
          </button>
        </div>
      </form>

      {/* Filtered Buses Display */}
      {filteredBuses.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {filteredBuses.map((bus) => (
            <div
              key={bus._id}
              className="bg-white rounded-lg shadow-lg p-6 transition transform hover:scale-105 hover:shadow-xl"
            >
              <p className="text-gray-600 mb-2 app-btn text-center">
                {bus.route.startCity + " to " + bus.route.endCity}
              </p>
              <p className="text-gray-600 mb-2">
                Date: {new Date(bus.date).toDateString()}
              </p>
              <p className="text-gray-600 mb-2">
                Time: {bus.departureTime + " to " + bus.arrivalTime}
              </p>
              <p className="text-gray-600 mb-2">
                Total Seats: {bus.busCapacity}
              </p>
              <p className="text-gray-600 mb-2">
                Details: {bus.busDetails.busNumber}
              </p>
              <p className="text-gray-600 mb-2">Fare: {bus.fare.actualPrice}</p>
              <button
                onClick={() => navigate("/seat-selection", { state: { bus } })}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4 w-full"
              >
                Book My Ticket
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600 mt-4">
          No buses available for this route on the selected date.
        </p>
      )}
    </div>
  );
};

export default BookingForm;
