import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const PaymentCard = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Load bus data from location.state or localStorage
  const initialBusData = location.state?.bus || JSON.parse(localStorage.getItem('busData'));
  
  const [busData, setBusData] = useState(initialBusData);

  // Save busData to localStorage when it's available
  useEffect(() => {
    if (busData) {
      localStorage.setItem('busData', JSON.stringify(busData));
    }
  }, [busData]);

  const handleCancel = () => {
    // Clear the busData and localStorage
    setBusData(null);
    localStorage.removeItem('busData');

    // Navigate to the dashboard or another page after cancel
    navigate('/');
  };

  return (
    <div className="font-[sans-serif] bg-white mx-4 p-4 rounded-2xl">
      <div className="md:max-w-5xl max-w-xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 max-md:order-1">
            <h2 className="text-3xl font-extrabold text-gray-800">
              Make a payment
            </h2>
            <p className="text-gray-800 text-sm mt-4">
              Complete your transaction swiftly and securely with our
              easy-to-use payment process.
            </p>

            <form className="mt-8 max-w-lg">
              <div className="grid gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Cardholder's Name"
                    className="px-4 py-3.5 bg-gray-100 text-gray-800 w-full text-sm border rounded-md focus:border-purple-500 focus:bg-transparent outline-none"
                  />
                </div>

                <div className="flex bg-gray-100 border rounded-md focus-within:border-purple-500 focus-within:bg-transparent overflow-hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 ml-3"
                    viewBox="0 0 32 20"
                  >
                    <circle cx="10" cy="10" r="10" fill="#f93232" />
                    <path
                      fill="#fed049"
                      d="M22 0c-2.246 0-4.312.75-5.98 2H16v.014c-.396.298-.76.634-1.107.986h2.214c.308.313.592.648.855 1H14.03a9.932 9.932 0 0 0-.667 1h5.264c.188.324.365.654.518 1h-6.291a9.833 9.833 0 0 0-.377 1h7.044c.104.326.186.661.258 1h-7.563c-.067.328-.123.66-.157 1h7.881c.039.328.06.661.06 1h-8c0 .339.027.67.06 1h7.882c-.038.339-.093.672-.162 1h-7.563c.069.341.158.673.261 1h7.044a9.833 9.833 0 0 1-.377 1H14.03c.266.352.553.687.862 1h2.215a10.05 10.05 0 0 1-1.107.986A9.937 9.937 0 0 0 22 20c5.523 0 10-4.478 10-10S27.523 0 22 0z"
                    />
                  </svg>
                  <input
                    type="number"
                    placeholder="Card Number"
                    className="px-4 py-3.5 text-gray-800 w-full text-sm outline-none bg-transparent"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      type="number"
                      placeholder="EXP."
                      className="px-4 py-3.5 bg-gray-100 text-gray-800 w-full text-sm border rounded-md focus:border-purple-500 focus:bg-transparent outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      placeholder="CVV"
                      className="px-4 py-3.5 bg-gray-100 text-gray-800 w-full text-sm border rounded-md focus:border-purple-500 focus:bg-transparent outline-none"
                    />
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="mt-8 w-40 py-3.5 text-sm bg-purple-500 text-white rounded-md hover:bg-purple-600 tracking-wide"
              >
                Pay
              </button>
              <button
                type="button"
                className="mt-8 w-40 py-3.5 text-sm bg-red-500 text-white rounded-md hover:bg-red-600 tracking-wide mx-2"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-gray-100 p-6 rounded-md">
            {busData ? (
              <>
                <h2 className="text-3xl font-extrabold text-gray-800">Rs. {busData.fare}</h2>

                <ul className="text-gray-800 mt-8 space-y-4">
                  <li className="flex flex-wrap gap-4 text-sm">
                    Bus Ticket ({busData.startLocation} to {busData.endLocation})
                    <span className="ml-auto font-bold">Rs. {busData.fare}</span>
                  </li>
                  <li className="flex flex-wrap gap-4 text-sm font-bold border-t-2 pt-4">
                    Total
                    <span className="ml-auto">Rs. {busData.fare}</span>
                  </li>
                </ul>
              </>
            ) : (
              <p>No bus details available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;
