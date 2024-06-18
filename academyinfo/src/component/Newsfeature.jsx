import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Newsfeature = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    vertical: false,
    verticalSwiping: false,
    prevArrow: null, // Remove previous arrow
    nextArrow: null, // Remove next arrow
  };

  return (
    // section 15
    <div>
    <h1 className="crousal-section ml-[100px] sm:ml-[130px] md:ml-[150px] mt-10 bg-green-400 rounded-tl-xl rounded-tr-xl text-black font-bold inline-block p-1 px-4">
      FEATURED IN
    </h1>
    {/* mx-5 */}
    <div className="image-crousal-section  w-[400px] ml-[50px] sm:w-[500px] sm:ml-[80px] md:w-[700px]  md:ml-[80px]  lg:w-[900px] lg:ml-[40px] xl:w-[1350px]  2xl:ml-[50px] 2xl:w-[2450px]   h-32 2xl:h-[300px] rounded-3xl bg-custom-brown  lg:mx-36 md:gap-10">
      <Slider {...settings} className="flex flex-row p-2">
        {/* First slide */}
        <div className="p-2">
          <div className="flex justify-center px-4 mt-6 gap-10 md:gap-48">
            <div className="w-20">
              <img
                className="h-5 max-w-full"
                src="https://rajivtalreja.sgacademy.info/wp-content/uploads/2023/04/dailyhunt-new.svg"
                alt="Slide 1"
              />
            </div>
            <div className="w-32">
              <img
                className="h-5 max-w-full"
                src="https://rajivtalreja.sgacademy.info/wp-content/uploads/2023/04/gdfgf.png"
                alt="Slide 1"
              />
            </div>
            <div className="w-20">
              <img
                className="h-5 max-w-full"
                src="https://rajivtalreja.sgacademy.info/wp-content/uploads/2023/04/India_Today_TV.png"
                alt="Slide 1"
              />
            </div>
          </div>
        </div>
  
        {/* Second slide */}
        <div className="p-2">
          <div className="flex justify-center px-4 mt-6 gap-10 md:gap-48">
            <div className="w-20">
              <img
                className="h-8 max-w-full"
                src="https://rajivtalreja.sgacademy.info/wp-content/uploads/2023/04/non-metro-white.png"
                alt="Slide 2"
              />
            </div>
            <div className="w-20">
              <img
                className="h-8 max-w-full"
                src="https://rajivtalreja.sgacademy.info/wp-content/uploads/2023/04/Zee-Business-CS6.png"
                alt="Slide 2"
              />
            </div>
            <div className="w-20">
              <img
                className="h-8 max-w-full"
                src="https://rajivtalreja.sgacademy.info/wp-content/uploads/2023/04/2560px-DNA_Daily_News_and_Analysis_New_Logo.svg.png"
                alt="Slide 2"
              />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  </div>
  
  );
};

export default Newsfeature;
