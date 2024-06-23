import React from "react";
import { CheckIcon } from "@heroicons/react/24/solid";
import ReactStars from "react-stars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
const Workshop = () => {
  return (
    // lg:max-w-full 
    <div className="workshop-section mt-14  flex flex-col pl-10   lg:gap-14 justify-center lg:space-y-0">
    {/* Left Side - Image */} 
    <div className="flex justify-center items-center mt-10">
      <div className="w-full justify-center">
      {/* lg:ml-[90px] */} 
      {/* bg-custom-brown  rounded-full h-[250px] w-[250px] ,*/}
        <div className=" workshop-left-section  rounded-full h-[250px] w-[450px] md:h-[300px] md:w-[500px] mx-auto lg:mx-0 relative lg:right-28">
          <h1 className="text-black animate-move-x-reverse   sm:ml-5 text-4xl sm:text-5xl absolute right-60 sm:right-[250px] md:text-6xl md:right-72 md:ml-2 lg:right-50 lg:text-6xl lg:ml-2 font-bold">
            Bishop
          </h1>
          <img
            className=" top-[-22px] h-[270px] md:h-[400px] lg:h-[400px] mt-2 rounded-lg ml-6 md:ml-2 w-42 lg:w-full"
            src="/public\MY PICTURE AT FIRST.png"
            alt="WorkshopImage"
          />
          <h1 className="animate-move-x-reverse font-bold absolute mt-32  left-60 bottom-20 md:bottom-14 md:mt-60 md:left-[290px] lg:left-[150px] lg:mt-[270px] right-0 text-4xl sm:text-4xl md:text-5xl lg:text-5xl lg:font-bold text-black mb-4 mr-4 lg:text-right">
            Adhikari
          </h1>
        </div>
        {/* lg:w-[500px] ,w-full */}
        <div className="left-text-section radius-yellow bg-custom-brown   text-xl md:mt-[85px] p-6 lg:mt-[85px] mt-1 rounded-3xl">
          <div>
            <div className="w-full text-center p-3">
              <span className="font-bold">India’s “Decision Entrepreneurship Coach”</span> Trained over
              <span className="font-bold "> 1, 90,000</span> Students & Business Enthusiast for <span className="font-bold">5 Years.</span>
            </div>
          </div>
          {/* Section 6 */}
          <div className="bg-custom-gray radius-yellow m-4 p-4 py-4 rounded-3xl text-center">
            <div className="flex justify-center">
              <ReactStars size={25} half={true} value={5} edit={false} />
            </div>
            <br />
            <p>
              More than <span className="font-bold"> 10,3,000</span> Students & Business Enthusiast Rated My coaching style.
            </p>
          </div>
        </div>
          
          {/* action now button */}
        <div>
          <button className="lg:hidden  flex mt-10 bg-blue-600 w-full justify-center p-5 font-bold text-2xl rounded-2xl relative  focus:border">
            Action Now with ₹299
            <span className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-blue-600 px-4 py-2 rounded-xl mr-3">
              <FontAwesomeIcon icon={faGreaterThan} />
            </span>
          </button>
        </div>
      </div>
    </div>
  
    {/* Right Side - Why attend this workshop? */}
    {/* lg:max-w-lg  ,mx-auto,lg:mx-0*/}
    <div className="right-section  flex flex-col mt-10 items-center  space-y-5   mt-">
      <h1 className="text-3xl font-bold text-center">Why attend this workshop?</h1>
      <div className="flex justify-center mb-4">
        <svg width="300" height="20" viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 15 Q 50 0, 95 15" stroke="yellow" strokeWidth="5" fill="none" />
        </svg>
      </div>
      {/* w-full */}
      <div className="bg-custom-brown radius-yellow p-3 rounded-3xl text-xl">
        <div className="flex items-center space-x-2 mt-2">
          <div className="text-white h-6 w-6 flex justify-center">
            <CheckIcon className="h-4 w-4 bg-green-500 rounded-full" />
          </div>
          <h1 className="p-4">
            Learn proven strategies to <span className="font-bold">tackle common entrepreneurial obstacles</span> and drive your business forward.
          </h1>
        </div>
  
        <div className="flex items-center space-x-2 mt-2">
          <div className="text-white h-6 w-6 flex justify-center">
            <CheckIcon className="h-4 w-4 bg-green-500 rounded-full" />
          </div>
          <h1 className="p-4">
            Gain insights into <span className="font-bold">scaling your business sustainably</span> without compromising quality or efficiency.
          </h1>
        </div>
  
        <div className="flex items-center space-x-2 mt-2">
          <div className="text-white h-6 w-6 flex justify-center">
            <CheckIcon className="h-4 w-4 bg-green-500 rounded-full" />
          </div>
          <h1 className="p-4">
            Gain valuable knowledge to <span className="font-bold">make data-driven & impactful</span> decisions for profit margins.
          </h1>
        </div>
  
        <div className="flex items-center space-x-2 mt-2">
          <div className="text-white h-6 w-6 flex justify-center">
            <CheckIcon className="h-4 w-4 bg-green-500 rounded-full" />
          </div>
          <h1 className="p-4">
            <span className="font-bold">Boost Strategy, Boost Financial, Boost Flexibility Unlock guaranteed outcomes</span> with the seminar's actionable steps.
          </h1>
        </div>
      </div>
  
      {/* Section 7 large screen show button */}
     {/* action now button */}
     <div className="w-full">
          <button className="hidden  lg:flex mt-10 bg-blue-600 w-full justify-center p-5 font-bold text-2xl rounded-2xl relative focus:border">
            Action Now with ₹299
            <span className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-blue-600 px-4 py-2 rounded-xl mr-3">
              <FontAwesomeIcon icon={faGreaterThan} />
            </span>
          </button>
        </div>
    
    </div>
  </div>
  
  );
};

export default Workshop;
