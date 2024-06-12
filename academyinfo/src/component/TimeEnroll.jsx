import React from "react";

const TimeEnroll = () => {
  return (
    // section 8 to 14
    <div className="flex flex-col items-center justify-center  sm:ml-0 md:ml-0 lg:ml-0 mt-10 text-white text-center">
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
        <h1 className="mt-4 text-xl font-bold">
          {" "}
          STARTS ON 2nd June 2024 (8:00 AM)
        </h1>
      </div>

      <div>
        <h1 className="mt-4  font-bold">
          {" "}
          Take Action with Fast Decision Maker
        </h1>
      </div>

      <div>
        <h1 className="mt-4 text-xl font-bold">
          {" "}
          Register Now in the Next 90 seconds to change your first decision move
        </h1>
      </div>
      {/* timer box */}
      <div className="flex flex-row gap-6 mt-4">
        {/* box1 */}
        <div className=" font-bold  bg-custom-brown py-7 px-5 rounded-2xl">
          <span className="font-bold text-2xl"> 00</span> <br />
          MINUTES
        </div>
        {/* box2 */}
        <div className=" font-bold  bg-custom-brown py-7 px-5 rounded-2xl">
        <span className="font-bold text-2xl"> 00</span> <br />
          SECONDS
        </div>
      </div>
    </div>
  );
};

export default TimeEnroll;
