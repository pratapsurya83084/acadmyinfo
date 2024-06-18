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
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  // current day
  const currentDate = new Date();
  const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);

  return (
    <div className="timeEnroll-section flex flex-col items-center justify-center sm:ml-0 md:ml-0 lg:ml-0 mt-10 text-white text-center">
      <div>
        <h2 className="font-bold text-center">Discover what waits for you</h2>
      </div>
      <div>
        <h1 className="mt-4 text-xl font-bold"> Enrolling Going on</h1>
      </div>

      <div>
        <h2 className="mt-4 text-sm font-bold">Your Basic English and Me</h2>
      </div>
      <div>
        <h1 className="mt-4 text-xl font-bold"> STARTS ON {formattedDate} (8:00 AM)</h1>
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
        <div className="font-bold bg-custom-brown py-7 px-5 rounded-2xl">
          <span className="font-bold text-2xl">{String(minutes).padStart(2, '0')}</span> <br />
          MINUTES
        </div>
        {/* box2 */}
        <div className="font-bold bg-custom-brown py-7 px-5 rounded-2xl">
          <span className="font-bold text-2xl">{String(seconds).padStart(2, '0')}</span> <br />
          SECONDS
        </div>
      </div>
    </div>
  );
};

export default TimeEnroll
