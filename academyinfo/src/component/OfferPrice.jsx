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
          <h3 className="text-xl font-bold mt-20 p-3">Total Value ₹7,486/- </h3>
        </div>

        <div>
          <h2 className="text-3xl font-bold  p-2">Regular Price: ₹999/- </h2>
        </div>
        <div>
          <h1 className="radius-yellow text-3xl font-bold  p-3 text-yellow-200 bg-custom-gray rounded-xl">TODAY'S OFFER PRICE: ₹99/-</h1>
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
        

        {/* <div className="w-full flex flex-row mb-4 justify-center items-center max-4">
          <button className=" mt-10 bg-blue-600  p-5 font-bold lg:text-2xl rounded-2xl relative">
            Action Now with ₹99
            <span className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-blue-600 px-4 py-2 rounded-xl mr-3">
              <FontAwesomeIcon icon={faGreaterThan} />
            </span>
          </button>
        </div> */}
        <div className="flex justify-center sm: mt-8 py-6 sm:px-2">
        <button className="bg-blue-600   text-white text-2xl text-center pb-3 font-bold py-2 px-10 rounded-xl  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
          Join Now for ₹99 <FontAwesomeIcon icon={faGreaterThan} className="bg-white p-2 rounded text-blue-500 px-4" />
        </button>
      </div>
      </div>
    </section>
  );
};

export default OfferPrice;
