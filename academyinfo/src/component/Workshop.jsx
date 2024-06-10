import React from "react";
import { CheckIcon } from "@heroicons/react/24/solid";
const Workshop = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-start lg:items-center space-y-6 lg:space-y-0 gap-20 lg:space-x-10 shadow-lg p-6 rounded-lg">
      {/* Left Side - Image */}
      <div className="bg-custom-brown rounded-full h-80 w-80 mx-auto lg:mx-0 ">
        <div>
          <h1 className="mt-2 animate-slide">Bishop</h1>
          <img
            className="h-80 rounded-lg ml-4 "
            src="https://rajivtalreja.sgacademy.info/wp-content/uploads/2023/04/rajv.png"
            alt="Workshop Image"
          />
        </div>
        {/* section-5 */}
       
      <div className="bg-custom-brown md:w-96 md:mr-20 px-5 p-6 rounded-lg text-center">
        <div className="mb-4">
          India’s “Decision Entrepreneurship Coach” Trained over 1, 90,000
          Students & Business Enthusiast for 5 Years.
        </div>
        <div className="bg-custom-gray m-4 p-4 py-4 rounded-lg">
          More than 10,3,000 Students & Business Enthusiast Rated My coaching
          style.
      </div>
    </div>
        {/* section-7 */}
        <div>
          <button className="bg-blue-600 w-full flex justify-center p-5 font-bold text-2xl rounded-2xl">Action Now with ₹99</button>
        </div>
      </div>

      {/* Right Side - Why attend this workshop? */}
      <div className="flex flex-col items-center space-y-4 max-w-lg mx-auto lg:mx-0 ">
        <h1 className="text-2xl font-bold text-center mt-72">
          Why attend this workshop?
        </h1>
        <div className="flex justify-center mb-4">
          <svg
            width="300"
            height="20"
            viewBox="0 0 100 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 15 Q 50 0, 95 15"
              stroke="orange"
              strokeWidth="5"
              fill="none"
            />
          </svg>
        </div>

        <div className="bg-custom-brown w-full p-4 rounded-lg">
          <div className="flex items-center space-x-2">
            <div className="text-white h-6 w-6 flex justify-center">
              <CheckIcon className="h-4 w-4 bg-green-500 rounded-full" />
            </div>
            <h1 className="p-4">
              Learn proven strategies to{" "}
              <span className="font-bold">
                tackle common entrepreneurial obstacles
              </span>{" "}
              and drive your business forward.
            </h1>
          </div>

          <div className="flex items-center space-x-2">
            <div className="text-white h-6 w-6 flex justify-center">
              <CheckIcon className="h-4 w-4 bg-green-500 rounded-full" />
            </div>
            <h1 className="p-4">
              Gain insights into{" "}
              <span className="font-bold">
                scaling your business sustainably
              </span>{" "}
              without compromising quality or efficiency.
            </h1>
          </div>

          <div className="flex items-center space-x-2">
            <div className="text-white h-6 w-6 flex justify-center">
              <CheckIcon className="h-4 w-4 bg-green-500 rounded-full" />
            </div>
            <h1 className="p-4">
              Gain valuable knowledge to{" "}
              <span className="font-bold">make data-driven & impactful</span>{" "}
              decisions for profit margins.
            </h1>
          </div>

          <div className="flex items-center space-x-2">
            <div className="text-white h-6 w-6 flex justify-center">
              <CheckIcon className="h-4 w-4 bg-green-500 rounded-full" />
            </div>
            <h1 className="p-4">
              <span className="font-bold">
                Boost Strategy, Boost Financial, Boost Flexibility Unlock
                guaranteed outcomes
              </span>{" "}
              with the seminar's actionable steps.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workshop;
