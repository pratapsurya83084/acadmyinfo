import React from "react";
import { CheckIcon } from "@heroicons/react/24/solid"; // Ensure you have heroicons installed
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";

const BuisnessChange = () => {
  return (
   

    <section className="relative bg-custom-brown  rounded-3xl mt-14 lg:mt-20 p-6">
      <div className="container mx-auto max-w-custom-2xl">
        <div className="flex flex-col lg:flex-row lg:gap-14 justify-center lg:space-y-0 rounded-lg">
          <div className="flex flex-col items-center w-full space-y-4 mx-auto lg:mx-0">
            <h2 className="text-3xl font-bold text-center text-white mb-4">
              How Will Your Business Transform with Decision?
            </h2>
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
            <div className="relative w-full text-center">
              {/* blueimage */}
              <img
                className="absolute left-[-50px] animate-slideLeft w-6 h-6"
                src="https://rajivtalreja.sgacademy.info/wp-content/uploads/2023/04/Polygon-blue.svg"
                alt="Polygon Blue"
              />
              {/* orange image */}
              {/* <img
                className="absolute right-[-50px] animate-slideRight w-6 h-6"
                src="https://rajivtalreja.sgacademy.info/wp-content/uploads/2023/04/Polygon-green.svg"
                alt="Polygon Green"
              /> */}
            </div>

            <div className="flex flex-col lg:flex-row justify-center items-center w-full lg:w-3/4 mx-auto space-y-4 lg:space-y-0">
              <div className="w-full lg:w-1/2 flex justify-center lg:justify-end p-4">
                <img
                  src="https://rajivtalreja.sgacademy.info/wp-content/uploads/2023/04/updfated.svg"
                  alt="Updated"
                  className="w-[341px] h-[300px]"
                />
              </div>

              <div className=" lg:w-1/2 p-4">
                <ul className="space-y-4 text-white text-xl">
                  <li className="flex items-center space-x-2">
                    <div className="bg-green-600 p- rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
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
                    <span>
                      Streamline operations for enhanced <b> efficiency</b> and{" "}
                      <b> productivity.</b>
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="bg-green-600 p- rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
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
                    <span>
                      Elevate decision-making for <b> strategic growth</b> and{" "}
                      <b> profitability.</b>
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="bg-green-600 p- rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
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
                    <span>
                      Cultivate a culture of <b>innovation</b> and{" "}
                      <b>adaptability </b> to thrive in <b>dynamic markets.</b>{" "}
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="bg-green-600 p- rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
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
                    <span>
                      Propel your business towards<b>sustainable success</b> and{" "}
                      <b>competitive advantage.</b>{" "}
                    </span>
                  </li>
                </ul>

                <div className="mt-10 mx-20 flex justify-center  bg-blue-600 text-white font-bold py-1 px-6 rounded-xl gap-10 md:gap-20 items-center  ">
                  {/* <a
                    href="https://info172.mojo.page/business-breakthrough-seminar-scalexga"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full flex items-center space-x-2"
                  > */}
                  <span className="">Action Now with ₹99</span>
                  <FontAwesomeIcon
                    icon={faGreaterThan}
                    className="bg-white p-2 px-6 text-blue-500 rounded-lg"
                  />
                  {/* </a> */}
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
