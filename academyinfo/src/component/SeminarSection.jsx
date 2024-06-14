import React from "react";
import { CheckIcon } from "@heroicons/react/24/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
const SeminarSection = () => {
  return (
    <div>
      <section className=" bg-custom-brown flex flex-col justify-center rounded-3xl items-center">
        {/* section 20 */}
        <h1 className="mt-5 p-4  flex justify-center text-center text-2xl py-6 font-bold ">Who Will Benefit Most from This Seminar?</h1>
        <div className="flex justify-center mb-4">
        <svg width="300" height="20" viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 15 Q 50 0, 95 15" stroke="orange" strokeWidth="5" fill="none" />
        </svg>
      </div>
        {/* flex large screen */}
        <div className="mt-10 lg:flex mx-5">
          {/* leftside text for large screen */}
          <div className="p-4">
            <h1 className="text-center font-bold">Who can join?</h1>
          <div className=" rounded-xl px-2 bg-custom-black flex items-center space-x-2 mt-2">
          <div className="text-white h-6 w-6 flex justify-center">
            <CheckIcon className="h-4 w-4 bg-green-500 rounded-full" />
          </div>
          <p className="p-4">
          Individuals with startup ventures or established businesses
          </p>
        </div>
        <div className=" rounded-xl px-2 bg-custom-black flex items-center space-x-2 mt-2">
          <div className="text-white h-6 w-6 flex justify-center">
            <CheckIcon className="h-4 w-4 bg-green-500 rounded-full" />
          </div>
          <p className="p-4">
          Owners of small enterprises seek to make informed decisions that lead to increased profitability and scalability.
          </p>
        </div>
        <div className=" rounded-xl px-2 bg-custom-black flex items-center space-x-2 mt-2">
          <div className="text-white h-6 w-6 flex justify-center">
            <CheckIcon className="h-4 w-4 bg-green-500 rounded-full" />
          </div>
          <p className="p-4">
          Executives, managers, and professionals in corporate settings looking to enhance their leadership and decision-making skills

          </p>
        </div>
        <div className=" rounded-xl px-2 bg-custom-black flex items-center space-x-2 mt-2">
          <div className="text-white h-6 w-6 flex justify-center">
            <CheckIcon className="h-4 w-4 bg-green-500 rounded-full" />
          </div>
          <p className="p-4">
          Executives, managers, and professionals in corporate settings looking to enhance their leadership and decision-making skills.
          </p>
        </div>
          </div>

          {/* right side text for large screen */}
          <div className="p-4">
            <h1 className="text-center font-bold">Who can't Join?</h1>
          <div className="px-2 rounded-xl bg-custom-black flex items-center space-x-2 mt-2">
          <div className="text-white h-6 w-6 flex justify-center">
            <CheckIcon className="h-4 w-4 bg-green-500 rounded-full" />
          </div>
          <p className="p-4">
          If You Are Not Resistant To Adopting New Strategies
          </p>
        </div>
        <div className="px-2 rounded-xl bg-custom-black flex items-center space-x-2 mt-2">
          <div className="text-white h-6 w-6 flex justify-center">
            <CheckIcon className="h-4 w-4 bg-green-500 rounded-full" />
          </div>
          <p className="p-4">
          If You Are Not a Leader
          </p>
        </div>

        <div className="px-2 rounded-xl bg-custom-black flex items-center space-x-2 mt-2">
          <div className="text-white h-6 w-6 flex justify-center">
            <CheckIcon className="h-4 w-4 bg-green-500 rounded-full" />
          </div>
          <p className="p-4">
          If You Are Not Serious About Your Business
          </p>
        </div>
        <div className="px-2 rounded-xl bg-custom-black flex items-center space-x-2 mt-2">
          <div className="text-white h-6 w-6 flex justify-center">
            <CheckIcon className="h-4 w-4 bg-green-500 rounded-full" />
          </div>
          <p className="p-4">
          If You Are Not Unwilling To Engage In Active Learning and Implementation
          </p>
        </div>
          </div>
    
        </div>
        {/* section -21 */}
          {/* button  */}
          <div className="mb-10">
          <button className="  flex mt-10 bg-blue-600 w-full justify-center p-5 font-bold lg:text-2xl rounded-2xl relative">
            Action Now with ₹99
            <span className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-blue-600 px-4 py-2 rounded-xl mr-3">
              <FontAwesomeIcon icon={faGreaterThan} />
            </span>
          </button>
        </div>
          
      </section>
    </div>
  );
};

export default SeminarSection;
