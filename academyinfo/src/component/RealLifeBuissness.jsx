import React from 'react';

const RealLifeBusiness = () => {
    return (
        // md:flex-row
        // px-5
        <section className="vidio-section flex flex-col lg:flex  text-white font-sans text-base leading-normal py-20 ">
            {/* 19 section */}
            <h1 className='text-center font-bold md:text-3xl text-2xl'> Discover real-life business enthusiasts who transform straight from those who attended my coaching</h1>
            <div className="flex justify-center mb-4">
              <svg
                width="400"
                height="30"
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
            {/* Adjust padding and colors as needed */}
            {/* flex flex-wrap */}
            <div className="vidios  justify-between mt-10 ">
                {/* Replace with actual video embed code */}
                {/* lg:w-1/2 ,md:w-1/2*/}
                <div className="w-full    mb-4  p-6">
                    <div className="relative " style={{ paddingBottom: '56.25%' }}>
                        {/* Replace with actual iframe or video component */}
                        <iframe
                            className="absolute top-0 left-0 w-full h-full rounded-3xl"
                            src="https://www.youtube.com/embed/uUCbgHlGHmI"
                            title="Embedded Video"
                            allowFullScreen
                        />
                    </div>
                </div>
                {/* lg:w-1/2 ,md:w-1/2*/}
                <div className="w-full mb-4 p-6">
                    <div className="relative" style={{ paddingBottom: '56.25%' }}>
                        {/* Replace with actual iframe or video component */}
                        <iframe
                            className="absolute top-0 left-0 w-full h-full rounded-3xl"
                            src="https://www.youtube.com/embed/UbLMpAnYWz0"
                            title="Embedded Video"
                            allowFullScreen
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RealLifeBusiness;
