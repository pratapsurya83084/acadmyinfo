import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { useState,useEffect } from "react";

const initialTotalSeconds = 90;
const OfferPrice = () => {
  const [totalSeconds, setTotalSeconds] = useState(() => {
    const savedTime = localStorage.getItem('countdownTotalSeconds');
    return savedTime ? parseInt(savedTime, 10) : initialTotalSeconds;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalSeconds((prevTotalSeconds) => {
        if (prevTotalSeconds > 0) {
          localStorage.setItem('countdownTotalSeconds', prevTotalSeconds - 1);
          return prevTotalSeconds - 1;
        } else {
          localStorage.setItem('countdownTotalSeconds', initialTotalSeconds);
          return initialTotalSeconds;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Calculate minutes and seconds
  // const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 90;

  return (
    <section>
      <div className="flex flex-col justify-center items-center">
        <div>
        {/* ₹7,486 */}
          <h3 className="text-xl font-bold mt-20 p-3">Total Value ₹9,468/- </h3>
        </div>

        <div>
          <h2 className="text-3xl font-bold  p-2">Regular Price: ₹2,499/- </h2>
        </div>
        <div>
          <h1 className="radius-yellow text-3xl font-bold  p-3 text-yellow-200 bg-custom-gray rounded-xl">TODAY'S OFFER PRICE: ₹299/-</h1>
        </div>


          {/*15 minuites decrease upto 00 and again after start 15 minuites restart again  */}
        <div className="flex flex-row gap-10 mt-5 ">
          {/* <div className="radius-yellow bg-gray p-5 rounded-xl font-bold">
            <span className="ml-5 text-2xl">{String(minutes).padStart(2, '0')}</span> <br />
            MINUTES
          </div> */}

          <div className="radius-yellow bg-gray p-5 rounded-xl font-bold">
            <span className="ml-5 text-2xl">{String(seconds).padStart(2, '0')}</span> <br />
            SECONDS
          </div>
        </div>
        

        
        {/* action now button */}
        <div className="flex justify-center mt-8 sm:mt-8 py-2 sm:px-2 mb-6">
          <button className="bg-blue-600 text-white text-xl font-bold py-2 px-6 rounded-xl hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center justify-between space-x-4">
            <span className="flex-grow text-center">Action Now for ₹299</span>
            <FontAwesomeIcon
              icon={faGreaterThan}
              className="bg-white text-blue-500 px-4 p-2 rounded-lg"
            />
          </button>
        </div>

      </div>
    </section>
  );
};

export default OfferPrice;
