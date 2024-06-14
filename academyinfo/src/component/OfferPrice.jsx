import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
const OfferPrice = () => {
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
          <h1 className="text-3xl font-bold  p-3 text-yellow-500 bg-custom-gray rounded-xl">TODAY'S OFFER PRICE: ₹99/-</h1>
        </div>

        <div className="flex flex-row gap-10 mt-5 ">
          <div className="bg-custom-black p-5 rounded-xl font-bold">
            <span className="ml-5 text-2xl"> 00</span> <br />
            MINUTES
          </div>

          <div className="bg-custom-black p-5 rounded-xl font-bold">
            <span className="ml-5 text-2xl"> 00</span> <br />
            SECONDS
          </div>
        </div>

        <div className="w-full flex flex-row mb-4 justify-center items-center max-4">
          <button className=" mt-10 bg-blue-600  p-5 font-bold lg:text-2xl rounded-2xl relative">
            Action Now with ₹99
            <span className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-blue-600 px-4 py-2 rounded-xl mr-3">
              <FontAwesomeIcon icon={faGreaterThan} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default OfferPrice;