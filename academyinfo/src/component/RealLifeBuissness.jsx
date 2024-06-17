import React from 'react';

const RealLifeBusiness = () => {
    return (
        // vidio-section
        <section className=" flex flex-col justify-center items-center p-4 text-white py-20">
            <div className='text-section flex-col text-center'>
                <h1 className=' text-2xl font-bold mb-4'>
                    Discover real-life business enthusiasts who transform straight from those who attended my coaching
                </h1>
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
            </div>
            {/* vidios */}
            {/* justify-between */}
            <div className="vidio-section  mt-10 w-full">
                <div className=" w-full md:w-[400px] lg:w-1/2 mb-4 p-2">
                    <div className="relative" style={{ paddingBottom: '56.25%' }}>
                        <iframe
                            className="absolute top-0 left-0 w-full h-full rounded-3xl"
                            src="https://www.youtube.com/embed/uUCbgHlGHmI"
                            title="Embedded Video"
                            allowFullScreen
                        />
                    </div>
                </div>
                <div className=" w-full md:w-[400px] lg:w-1/2 mb-4 p-2">
                    <div className="relative" style={{ paddingBottom: '56.25%' }}>
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
