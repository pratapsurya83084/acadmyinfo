import React, { useState, useEffect } from "react";

const initialTotalSeconds = 90; // Initial countdown time in seconds, 1/2 minutes and 30 seconds

const TimeEnroll = () => {
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
  // const minutes = Math.floor(totalSeconds / 90);
  const seconds = totalSeconds % 90;

  // current day
  
// To show the date and day for the 15th day from the current date, you can modify the JavaScript code as follows:

const currentDate = new Date();
const futureDate = new Date();
futureDate.setDate(currentDate.getDate() + 16);

const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
const formattedDate = futureDate.toLocaleDateString("en-US", options);

// console.log(formattedDate);
  return (
    <div className="timeEnroll-section flex flex-col items-center justify-center sm:ml-0 md:ml-0 lg:ml-0 mt-10 text-white text-center">
      <div>
        <h2 className="mt-4 font-bold">"Discover what waits for you"</h2>
      </div>
      <div>
        <h1 className="mt-4 font-bold"> Enrolling Going on</h1>
      </div>

      <div>
        <h2 className="mt-4 font-bold">Your Basic English and Me</h2>
      </div>
      <div>
        <h1 className="mt-4 text-xl font-bold text-red-500"> STARTS ON {formattedDate} (8:00 AM)</h1>
      </div>

      <div>
        <h1 className="mt-4 font-bold"> Take Action with Fast Decision Maker</h1>
      </div>

      <div>
        <h1 className="mt-4 text-xl font-bold"> Register Now in the Next 90 seconds to change <br /> your first decision move </h1>
      </div>

      {/* timer box */}
      <div className="flex flex-row gap-6 mt-4">
        {/* box1 */}
        {/* <div className=" radius-yellow font-bold bg-custom-brown py-7 px-5 rounded-2xl">
          <span className="font-bold text-2xl">{String(minutes).padStart(2, '0')}</span> <br />
          MINUTES
        </div> */}
        {/* box2 */}
        <div className="radius-yellow font-bold bg-custom-brown py-7 px-5 rounded-2xl">
          <span className="font-bold text-2xl">{String(seconds).padStart(2, '0')}</span> <br />
          SECONDS
        </div>
      </div>
    </div>
  );
};

export default TimeEnroll
