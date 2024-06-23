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
    <div className="newsFeature-section">
    <h1 className="crousal-section bg-yellow-200 ml-[100px] sm:ml-[130px] md:ml-[150px] mt-10  rounded-tl-xl rounded-tr-xl text-black font-bold inline-block p-1 px-4">
      FEATURED IN
    </h1>
    {/* mx-5 */}
    <div className="image-crousal-section flex-row justify-center items-center  radius-yellow w-[400px] ml-[60px] sm:w-[500px] sm:ml-[80px] md:w-[700px]  md:ml-[88px]  lg:w-[800px] lg:ml-[100px] xl:w-[1400px]  xl:ml-[38px] 2xl:ml-[50px] 2xl:w-[2460px]     h-32 2xl:h-[300px] rounded-3xl bg-custom-brown  lg:mx-36 md:gap-10">
      <Slider {...settings} className="flex flex-row p-2">
        {/* First slide */}
        <div className="p-2">
          <div className="flex justify-center px- mt-6 gap-5 md:gap-32">
          
            <div className="w-50 ">
              <img
                className="h-[83px] w-[180px] md:w-[280px] pb-3 max-w-full"
                src="\public\BBC_News-Logo.wine.png"
                alt="Slide 1"
              />
            </div>

            <div className="w-50 mt-2 pb-2">
              <img
                className="h-14 max-w-full"
                src="\public\sky_news_img.jpg"
                alt="Slide 2"
              />
            </div>

            <div className="w-50">
              <img
                className="h-14 mt-2 max-w-full pb-2 pl-2"
                src="\public\timesof_india.jpg"
                alt="Slide 3"
              />
            </div>
          </div>
        </div>
  
        {/* second slide */}
        <div className="p-2">
          <div className="flex justify-center px- mt-6 gap-10 md:gap-32">
            <div className="w-50">
              <img
                className="h-12 max-w-full"
                src="\public\the_hindu_newsimg.webp"
                alt="Slide 2"
              />
            </div>

            <div className="w-50">
              <img
                className="h-14 max-w-full"
                src="\public\gulf_news_img.png"
                alt="Slide 2"
              />
            </div>

            <div className="w-50">
              <img
                className="h-12 max-w-full"
                src="\public\britan_new_img.jpg"
                alt="Slide 2"
              />
            </div>
          </div>
        </div>

            {/* third slide */}
        <div className="p-2">
          <div className="flex justify-center px- mt-6 gap-10 md:gap-32">
            <div className="w-50">
              <img
                className="h-12 max-w-full"
                src="\public\euronews-logo-768x230.jpg"
             alt="slide 3"
             />
            </div>

            <div className="w-50">
              <img
                className="h-14 max-w-full"
                src="\public\news18_img.jpg"
                alt="Slide 3"
              />
            </div>

            <div className="w-50">
              <img
                className="h-12 max-w-full"
                src="\public\uae_img.avif"
                alt="Slide 3"
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
