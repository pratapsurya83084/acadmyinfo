import React from "react";

const Heading = () => {
  return (
    <div className="heading-text-section flex flex-col  items-center justify-items-center justify-center">
      {/* section 1- */}
      <div className=" ">
        {/* Blue Image */}
        <div className="blue-image-section absolute left-0 top-0  animate-move-x-reverse  mt-4">
          <img
            className="w-16 md:w-24 lg:w-32 mt-36 m-2 h-10"
            src="https://rajivtalreja.sgacademy.info/wp-content/uploads/2023/04/Polygon-blue.svg"
            alt="Polygon Blue"
          />
        </div>
        {/* Text Section */}
        {/* sm:ml-2 */}
        <div className="flex flex-col p-2   items-center  w-full justify-center m ">
          <div className="flex ml-10 items-center">
            <div className="radius-yellow mt-10 mx-5 bg-custom-brown text-xl md:text-2xl font-bold rounded-3xl p-4 text-center md:whitespace-nowrap">
              <h1 className="text-white ">
                Student & Entrepreneurship Decision Revolution Seminar
                <br />
                <span className="text-yellow-200">4-Hour</span> On Online Mode
              </h1>
            </div>
          </div>
        </div>
        {/* Orange Image */}
        <div className="orange-image-section absolute left-[430px]  w-20 h-20 sm:left-[800px] md:left-[800px] lg:left-[800px] xl:left-[1200px]  2xl:left-[2450px] right-0 top-0 animate-move-x ">
          <img
          // lg:w-32,ml-8 mr-4
            className="w-16 md:w-24  mt-5 h-10 "
            src="https://rajivtalreja.sgacademy.info/wp-content/uploads/2023/04/Polygon-green.svg"
            alt="Polygon Green"
          />
        </div>
      </div>
      {/* section -2 */}
      {/* lg:whitespace-nowrap */}
   

      <div className=" text-white flex flex-row   w-full mt-10  justify-center ">
        <h1 className="text-center  text-3xl ml-7 md:text-5xl font-bold">
          Transform Your Business into a 
          <span className="text-yellow-200 "> Crore-Earning</span> Enterprise
       
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