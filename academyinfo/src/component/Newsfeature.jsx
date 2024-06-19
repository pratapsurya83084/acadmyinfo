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
    <h1 className="crousal-section bg-yellow-200 ml-[100px] sm:ml-[130px] md:ml-[150px] mt-10  rounded-tl-xl rounded-tr-xl text-black font-bold inline-block p-1 px-4">
      FEATURED IN
    </h1>
    {/* mx-5 */}
    <div className="image-crousal-section flex-row justify-center items-center  radius-yellow w-[400px] ml-[60px] sm:w-[500px] sm:ml-[80px] md:w-[700px]  md:ml-[88px]  lg:w-[800px] lg:ml-[100px] xl:w-[1400px]  xl:ml-[29px] 2xl:ml-[50px] 2xl:w-[2450px]     h-32 2xl:h-[300px] rounded-3xl bg-custom-brown  lg:mx-36 md:gap-10">
      <Slider {...settings} className="flex flex-row p-2">
        {/* First slide */}
        <div className="p-2">
          <div className="flex justify-center px- mt-6 gap-5 md:gap-32">
          
            <div className="w-50 ">
              <img
                className="h-[83px] w-[180px] md:w-[280px] pb-3 max-w-full"
                src="https://download.logo.wine/logo/BBC_News/BBC_News-Logo.wine.png"
                alt="Slide 1"
              />
            </div>

            <div className="w-50 mt-2 pb-2">
              <img
                className="h-14 max-w-full"
                src="https://th.bing.com/th/id/OIP.4i0cLPpxtY13qimcDOnHWAHaEK?rs=1&pid=ImgDetMain"
                alt="Slide 2"
              />
            </div>

            <div className="w-50">
              <img
                className="h-14 mt-2 max-w-full pb-2 pl-2"
                src="https://th.bing.com/th/id/OIP.0HPmeGo9I93VgLHCV5HlUQHaEH?rs=1&pid=ImgDetMain"
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
                src="https://bestmediainfo.com/uploads/2018/12/THE-HINDU-Logo_4.jpg"
                alt="Slide 2"
              />
            </div>

            <div className="w-50">
              <img
                className="h-14 max-w-full"
                src="https://lh3.googleusercontent.com/zLlf0nImq-9dgohTcp52GaAfUXOPg0UsRtcaCYJcIJkb4yqHPtKQtf9z43-riSaJLLM"
                alt="Slide 2"
              />
            </div>

            <div className="w-50">
              <img
                className="h-12 max-w-full"
                src="https://photos.live-tv-channels.org/tv-logo/gb-news-3616.jpg"
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
                src="https://awards.social/wp-content/uploads/2017/12/euronews-logo-768x230.jpg"
             alt="slide 3"
             />
            </div>

            <div className="w-50">
              <img
                className="h-14 max-w-full"
                src="https://1.bp.blogspot.com/-RYpXAD_Jwws/WfNPAxtGSkI/AAAAAAAAADE/HSpC-kxi6dQMfbAWBrYaG7tVqNsa0Cl1wCLcBGAs/s1600/news18.jpg"
                alt="Slide 3"
              />
            </div>

            <div className="w-50">
              <img
                className="h-12 max-w-full"
                src="https://www.thenationalnews.com/resizer/uy6Ivt5_95KXMCfOndgf2KcHV1A=/arc-photo-thenational/eu-central-1-prod/public/AAOEFYKSMFFFDDYXHCN67KEX44.jpg"
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
