import React from "react";
// import { CheckIcon } from "@heroicons/react/24/solid"; // Ensure you have heroicons installed
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";

const BuisnessChange = () => {
  return (
    <section className="radius-yellow buisness-section  w-full relative flex-col  bg-custom-brown rounded-3xl mt-14 lg:mt-20 p-6">
    <div className="container mx-auto max-w-custom-2xl">
      <div className="flex flex-col lg:flex-row lg:gap-14 justify-center lg:space-y-0 rounded-lg">
        <div className="flex flex-col items-center w-full space-y-4 mx-auto lg:mx-0">
          <h2 className="text-3xl mt-10 font-bold text-center text-white mb-4">
            How Will Your Business Transform with Decision?
          </h2>
          <div className="flex justify-center mb-4">
            <svg
              width="200"
              height="20"
              viewBox="0 0 100 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 15 Q 50 0, 95 15"
                stroke="yellow"
                strokeWidth="8"
                fill="none"
              />
            </svg>
          </div>
          {/* <div className="relative w-full text-center"> */}
            {/* blueimage */}
            {/* w-4 h-4 sm:w-6 sm:h-6 */}
            {/* <img
              className=" left-[-10px] sm:left-[-50px] animate-slideLeft "
              src="https://rajivtalreja.sgacademy.info/wp-content/uploads/2023/04/Polygon-blue.svg"
              alt="Polygon Blue"
            /> */}
            {/* orange image */}
            {/* <img
              className="absolute right-[-50px] animate-slideRight w-6 h-6"
              src="https://rajivtalreja.sgacademy.info/wp-content/uploads/2023/04/Polygon-green.svg"
              alt="Polygon Green"
            /> */}
          {/* </div> */}
          {/* mx-auto */}
          {/* lg:flex-row */}
          <div className="image-text-section  flex flex-col    justify-center items-center w-full lg:w-3/4  space-y-2 lg:space-y-0">
            <div className="w-full lg:w-1/2  flex justify-center lg:justify-end p-4">
              <img   
                src="public/Great Approach PICTURE.jpg"
                alt="Updated"
                className="image-section radius-yellow rounded-3xl w-[400px] h-[350px] sm:w-[441px] sm:h-[300px]"
              />
            </div>
  
            <div className="w-full lg:w-1/ p-4">
              <ul className="space-y-4 text-white text-lg sm:text-xl">
                <li className="flex items-center space-x-2">
                  <div className="bg-green-600 p-1 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 22 22"
                      fill="none"
                    >
                      <circle cx="11" cy="11" r="11" fill="#25AB75"></circle>
                      <path
                        d="M6.94042 9.69044L5.30351 11.3273L5.23804 11.3928L9.42851 15.5833L16.8928 8.11901L15.1904 6.41663L9.42851 12.1785L6.94042 9.69044Z"
                        fill="white"
                      ></path>
                    </svg>
                  </div>
                  <span className="p-2 sm:p-4 text-2xl">
                    Streamline operations for enhanced <b> efficiency</b> and{" "}
                    <b> productivity.</b>
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="bg-green-600 p-1 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 22 22"
                      fill="none"
                    >
                      <circle cx="11" cy="11" r="11" fill="#25AB75"></circle>
                      <path
                        d="M6.94042 9.69044L5.30351 11.3273L5.23804 11.3928L9.42851 15.5833L16.8928 8.11901L15.1904 6.41663L9.42851 12.1785L6.94042 9.69044Z"
                        fill="white"
                      ></path>
                    </svg>
                  </div>
                  <span className="p-2 sm:p-4 text-2xl">
                    Elevate decision-making for <b> strategic growth</b> and{" "}
                    <b> profitability.</b>
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="bg-green-600 p-1 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 22 22"
                      fill="none"
                    >
                      <circle cx="11" cy="11" r="11" fill="#25AB75"></circle>
                      <path
                        d="M6.94042 9.69044L5.30351 11.3273L5.23804 11.3928L9.42851 15.5833L16.8928 8.11901L15.1904 6.41663L9.42851 12.1785L6.94042 9.69044Z"
                        fill="white"
                      ></path>
                    </svg>
                  </div>
                  
                  <span className="p-2 sm:p-4 text-2xl">
                    Cultivate a culture of <b>innovation</b> and{" "}
                    <b>adaptability </b> to thrive in <b>dynamic markets.</b>{" "}
                  </span>
                </li>

                <li className="flex items-center space-x-2">
                  <div className="bg-green-600 p-1 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 22 22"
                      fill="none"
                    >
                      <circle cx="11" cy="11" r="11" fill="#25AB75"></circle>
                      <path
                        d="M6.94042 9.69044L5.30351 11.3273L5.23804 11.3928L9.42851 15.5833L16.8928 8.11901L15.1904 6.41663L9.42851 12.1785L6.94042 9.69044Z"
                        fill="white"
                      ></path>
                    </svg>
                  </div>
                  <span className="p-2 sm:p-4 text-2xl">
                    Propel your business towards<b>sustainable success</b> and{" "}
                    <b>competitive advantage.</b>{" "}
                  </span>
                </li>
              </ul>
  
              <div className="flex justify-center sm: mt-8 py-2 sm:px-2">
        <button className="bg-blue-600    text-white text-2xl font-bold py-2 px-6 rounded-xl  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
         <span className="">Join Now for ₹99 <FontAwesomeIcon icon={faGreaterThan}  className="bg-white text-blue-500 px-2 py-1 rounded-lg "/>
        </span>
        </button> 
      </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  );
};

export default BuisnessChange;
