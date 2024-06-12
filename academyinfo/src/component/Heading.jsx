import React from "react";

const Heading = () => {
  return (
    <div>
      {/* section 1- */}
      <div className=" justify-center   max-w-full">
        {/* Blue Image */}
        <div className="absolute left-0 top-0  animate-move-x-reverse  mt-4">
          <img
            className="w-16 md:w-24 lg:w-32 mt-36 m-2 h-10"
            src="https://rajivtalreja.sgacademy.info/wp-content/uploads/2023/04/Polygon-blue.svg"
            alt="Polygon Blue"
          />
        </div>
        {/* Text Section */}
        <div className="flex flex-col p-2 items-center ml-6 w-full justify-center m-l-10 ">
          <div className="flex items-center">
            <div className="inline-block mt-10 mx-10 bg-custom-brown text-xl md:text-2xl font-bold rounded-lg p-4 text-center md:whitespace-nowrap">
              <h1 className="text-white">
                Student & Entrepreneurship Decision Revolution Seminar
                <br />
                <span className="text-yellow-400">4-Hour</span> On Online Mode
              </h1>
            </div>
          </div>
        </div>
        {/* Orange Image */}
        <div className="absolute  right-0 top-0 animate-move-x ">
          <img
            className="w-16 md:w-24 lg:w-32 mt-5 h-10 ml-8 mr-4"
            src="https://rajivtalreja.sgacademy.info/wp-content/uploads/2023/04/Polygon-green.svg"
            alt="Polygon Green"
          />
        </div>
      </div>
      {/* section -2 */}
      <div className="text-white  sm:ml-2 w-full mt-10 flex justify-center mx-4">
        <h1 className="text-center ml-4 text-3xl md:text-5xl font-bold">
          Transform Your Business into a <br />
          <span className="text-yellow-400 ml-2"> Crore-Earning</span> Enterprise
          (Big Content)
        </h1>
      </div>
      {/* section-3  */}
      <div className="flex justify-center mt-6 font-bold">
        <h2 className="text-xl mx-2  text-center w-full ml-6">Say Goodbye to Overwhelm and Confusion of Your Future</h2>
      </div>
    </div>
  );
};

export default Heading;