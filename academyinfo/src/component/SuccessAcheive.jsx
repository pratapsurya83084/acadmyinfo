import React from 'react'

const SuccessAcheive = () => {
  return (
    <div>
     <section class="success-achieved  sm:w-[750px] sm:ml-[0px]  md:w-[900px] md:ml-[30px]  lg:w-[1340px]  2xl:w-[2460px]  m-0    text-center text-gray-600 body-font">
        <h1 className='text-center text-3xl font-bold'>Success Achieved</h1>

        <div className="flex justify-center mb-4">
          <svg
            width="300"
            height="30"
            viewBox="0 0 100 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 15 Q 50 0, 95 15"
              stroke="yellow"
              strokeWidth="5"
              fill="none"
            />
          </svg>
        </div>
  <div class="container   py-5 mx-auto">

    <div class="md:flex flex-wrap ">
        {/*  img1*/}
      <div class="xl:w-1/2 md:w-1/2  p-2 lg:p-0 ">
        <div class="bg-gray-100 p-1 rounded-lg">
          <img class="radius-yellow  rounded-3xl h-96 p- w-full object-cover object-center mb-6" 
          src="\public\EmailSection_1.png" alt="content"/>
        </div>
      </div>
     {/*  img2*/}
     <div class="xl:w-1/2 md:w-1/2 p-2 lg:p-0">
        <div class="bg-gray-100 p-1 rounded-lg">
          <img class="radius-yellow  rounded-3xl h-96  w-full object-cover object-center mb-6" 
          src="\public\Emailsection2_1.png" alt="content"/>

        </div>
      </div>
      {/*  img3*/}
      <div class="xl:w-1/2 md:w-1/2 p-2 lg:p-0">
        <div class="bg-gray-100 p-1 rounded-lg">
          <img class="radius-yellow  rounded-3xl h-96  w-full object-cover object-center mb-6" 
          src="\public\ProductLaunch.png" alt="content"/>

        </div>
      </div>
       {/*  img4*/}
       <div class="xl:w-1/2 md:w-1/2 p-2 lg:p-0">
        <div class="bg-gray-100 p-1 rounded-lg">
          <img class="radius-yellow  rounded-3xl h-96 w-full object-cover object-center mb-6" 
          src="\public\HighScaleTicket.png" alt="content"/>

        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default SuccessAcheive
