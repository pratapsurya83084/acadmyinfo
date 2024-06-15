import React from "react";

const PictureSection = () => {
  return (
    <section>
      <div className="bg-custom-brown mt-5 rounded-3xl relative">
        {/* section-31 */}
        <h1 className="text-center text-2xl p-4 mt-5 lg:text-3xl font-bold">
          I'm Committed to Helping One Million Business Owners Make Better
          Decisions for Profit and Growth
        </h1>
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
        <div className="images-coach w-full">
          <div className="w-full gap-y-3 md:gap-x-3 lg:gap-x-2 flex-col justify-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 lg:mx-1 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-32">
            <div>
              <img
                className="h-[200px] rounded-3xl"
                src="https://rajivtalreja.sgacademy.info/wp-content/uploads/2023/04/BSW0.webp"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-[200px] rounded-3xl"
                src="https://rajivtalreja.sgacademy.info/wp-content/uploads/2023/04/BSW1.webp"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-[200px] rounded-3xl"
                src="https://rajivtalreja.sgacademy.info/wp-content/uploads/2023/04/BSW2.webp"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-[200px] rounded-3xl"
                src="https://rajivtalreja.sgacademy.info/wp-content/uploads/2023/04/BSW3.webp"
                alt=""
              />
            </div>
            {/* 5th image */}
            <div className="col-span-1 sm:col-span-2 md:col-span-4 lg:col-span-4">
              <img
                className="h-[190px] w-full object-cover rounded-3xl"
                src="https://rajivtalreja.sgacademy.info/wp-content/uploads/2023/04/Picture100.webp"
                alt=""
              />
            </div>
          </div>
        </div>
        <h1 className="text-center font-bold text-xl lg:text-3xl p-8">
          Because I've Faced Numerous Challenges Myself But I Build it ...
        </h1>
        <img
          className="md:absolute top-[600px] xl:top-[600px] 2xl:top-[400px] animate-move-x-reverse ml-10 md:h-14 bottom-0 xl:ml-20"
          src="https://rajivtalreja.sgacademy.info/wp-content/uploads/2023/04/Polygon-green.svg"
          alt=""
        />
      </div>

      {/* <div className="flex justify-center mt-8">
        <button className="bg-blue-500 text-white font-bold py-2 px-6 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
          Join Now for ₹99
        </button>
      </div> */}
    </section>
  );
};

export default PictureSection;
