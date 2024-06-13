import React from 'react';

const RealLifeBusiness = () => {
    return (
        <section className=" text-white font-sans text-base leading-normal py-20 px-5">
            {/* 19 section */}
            <h1 className='text-center font-bold md:text-2xl'> Discover real-life business enthusiasts who transform straight from those who attended my coaching</h1>
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
            <div className="flex flex-wrap justify-between mt-10 ">
                {/* Replace with actual video embed code */}
                <div className="w-full md:w-[480px] lg:w-[670px] mb-4 md:mb-0 ">
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
                <div className="w-full md:w-[480px] lg:w-[670px]">
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
