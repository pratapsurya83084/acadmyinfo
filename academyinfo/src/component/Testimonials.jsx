import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
const Testimonials = () => {
  return (
    <section>
      <div>
        <div className="flex flex-col justify-center items-center">
          <div>
            <h1 className="text-center mt-10 text-2xl font-bold">
              {" "}
              Struggling to Make a Decision?
            </h1>
          </div>

          <div className="flex justify-center mb-4">
            <svg
              width="300"
              height="30"
              viewBox="0 0 100 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 15 Q 50 0, 95 15"
                stroke="yellow"
                strokeWidth="5"
                fill="none"
              />
            </svg>
          </div>
        </div>

        <div className="mb-10 mx-10 mt-10  gap-5  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {/* card1 */}
          <div className="radius-yellow p-8 rounded-3xl max-w-sm flex flex-col justify-center items-center bg-custom-brown">
            <h1 className="text-center">
              <b className="text-yellow-200 text-2xl">71 % of YOY growth</b>{" "}
              (Just at 5 Months) <br />
              {/* 8 Million Customer{" "} */}
            </h1>
            <img
              className="h-56"
              src="https://rajivtalreja.sgacademy.info/wp-content/uploads/2023/04/topArrow.svg"
              alt=""
            />
            <h5 className="p-3 text-2xl flex flex-col justify-center items-center text-center font-bold tracking-tight text-gray-900 dark:text-white">
              Startup
            </h5>
            <p className="bg-custom-gray rounded-3xl p-4 text-center font-normal text-gray-700 dark:text-gray-400">
              <span className="p-4 text-yellow-200 text-2xl font-bold">
                Trishita{" "}
              </span>
            </p>
          </div>

          {/* card2 */}
          <div className=" radius-yellow p-8 rounded-3xl max-w-sm flex flex-col justify-center items-center bg-custom-brown">
            <h1 className="text-center">
              <b className="text-yellow-200 text-2xl ">60 Corer</b> <br />
              (in the 3 years)
              {/* with mentoring Customer{" "} */}
            </h1>
            <img
              className="h-56"
              src="https://rajivtalreja.sgacademy.info/wp-content/uploads/2023/04/topArrow.svg"
              alt=""
            />
            <h5 className="p-3 text-2xl flex flex-col justify-center items-center text-center font-bold tracking-tight text-gray-900 dark:text-white">
              Devine Corporation.
            </h5>
            <p className="bg-custom-gray rounded-3xl p-4 text-center font-normal text-gray-700 dark:text-gray-400">
              <span className="p-4 text-yellow-200 text-2xl font-bold">
                Jenica Yoo{" "}
              </span>
            </p>
          </div>

          {/* card3 */}
          <div className="radius-yellow p-8 rounded-3xl max-w-sm flex flex-col justify-center items-center bg-custom-brown">
            <h1 className="text-center">
              <b className="text-yellow-200 text-2xl">3 Coroe in </b> <br />
              (just 6 Months){" "}
            </h1>
            <img
              className="h-56"
              src="https://rajivtalreja.sgacademy.info/wp-content/uploads/2023/04/topArrow.svg"
              alt=""
            />
            <h5 className="p-3 text-2xl flex flex-col justify-center items-center text-center font-bold tracking-tight text-gray-900 dark:text-white">
              Freelancer Design and Content Strategies
            </h5>
            <p className="bg-custom-gray rounded-3xl p-4 text-center font-normal text-gray-700 dark:text-gray-400">
              <span className="p-4 text-yellow-200 text-2xl font-bold">
                Deepak N R{" "}
              </span>
            </p>
          </div>
        </div>

        <div className="mt-2 p-4 flex justify-center items-center ">
      <button className=" flex items-center text-xl   px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
        Action Now with 99
        <FontAwesomeIcon icon={faGreaterThan} className="ml-2 bg-white p-3 rounded text-blue-500" />
      </button>
    </div>
      </div>
    </section>
  );
};

export default Testimonials;
