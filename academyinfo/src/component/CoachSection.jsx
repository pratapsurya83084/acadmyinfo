import React, { useState } from 'react'

const firestq = "You will get an email right after you register. Please check the spam and promotions tab in your Inbox if the email doesn’t land in your PRIMARY tab."
const CoachSection = () => {
const [symbol,setSymbol]=useState("+")
//create atogglemode
const [toggle,setToggle]=useState(false)

function toggleMode() {
    setToggle(!toggle)
}

function checkAnswer() {
    setSymbol("-")
    
    // setSymbol("+")
}
 

    
// function  checkAnswer() {
//     setSymbol("-")

// }
  return (
    <section>
        {/* <div className=" flex flex-col justify-center items-center  mt-10 ">

            <h1>Get Acquainted with Your Coach</h1>
            <div className="flex justify-center mb-4">
        <svg width="400" height="30" viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 15 Q 50 0, 95 15" stroke="orange" strokeWidth="5" fill="none" />
        </svg>
             </div>
             <div className="relative flex flex-col items-center bg-custom-brown rounded-3xl p-8">
      <div className="flex flex-row justify-center items-center w-full">
        <div className="relative z-10 pr-24">
          <h1 className="text-lg font-bold">Bishop Adhikari</h1>
          <p className="text-sm text-gray-700">India's MSME Business Coach</p>
        </div>
        <div className="relative">
          <img
            src="https://rajivtalreja.sgacademy.info/wp-content/uploads/2023/04/Rajiv-27.png"
            className="h-[168px] -top-8 -right-8 absolute"
            alt="Bishop Adhikari"
          />
        </div>
      </div>
    </div>
   

   {/* card */}
       {/* <div className='flex flex-row bg-custom-brown mt-10 h-40 rounded-3xl'>
        <div className='px-6 py-6'>
            <h1 >16</h1>
            <p>Years Of Experience In Training And Coaching</p>
        </div>
        <di >contact logo</di>
       </div> */}



        {/* </div> */} 

        <div className="flex flex-col items-center bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-4">Get Acquainted with Your Coach</h1>
      <div className='bg-custom-brown flex flex-row h-[168px] mt-10 rounded-3xl pr-20'>
       <div>
        <img src="https://rajivtalreja.sgacademy.info/wp-content/uploads/2023/04/Rajiv-27.png"className='h-52 ml-2  relative bottom-10' alt="" />
       </div>
       <div className='mt-14 px-2'>
        <h1 className='text-2xl font-bold'>Bishop Adhikari</h1>
        <p>
        India's MSME Business Coach</p>
       </div>
      </div>

      <div className="flex flex-wrap justify-around w-full max-w-4xl mt-8">
        <div className="flex flex-col items-center bg-custom-brown text-white rounded-2xl p-4 m-2 w-1/4 min-w-[200px]">
          <h3 className="text-3xl font-bold">16</h3>
          <p className="text-sm text-gray-300">Years Of Experience In Training And Coaching</p>
        </div>
        <div className="flex flex-col items-center bg-custom-brown text-white rounded-2xl p-4 m-2 w-1/4 min-w-[200px]">
          <h3 className="text-3xl font-bold">50M</h3>
          <p className="text-sm text-gray-300">Entrepreneurs Reached In The Last 6 Years</p>
        </div>
        <div className="flex flex-col items-center bg-custom-brown text-white rounded-2xl p-4 m-2 w-1/4 min-w-[200px]">
          <h3 className="text-3xl font-bold">500+</h3>
          <p className="text-sm text-gray-300">Seminars And Workshops Conducted In The Last 6 Years</p>
        </div>
        <div className="flex flex-col items-center bg-custom-brown text-white rounded-2xl p-4 m-2 w-1/4 min-w-[200px]">
          <h3 className="text-3xl font-bold">500K</h3>
          <p className="text-sm text-gray-300">Social Media Following</p>
        </div>

     {/* click the button show text and color change also symbol change */}
           <div>
            <h1 onClick={checkAnswer} className='text-xl font-bold'>How will I get the link to attend the program?<span className='p-4 text-yellow-500 cursor-pointer'>{symbol}</span> </h1>
              <p></p>
           <hr />
            </div>       
 
      </div>

      <div className="flex justify-center mt-8">
        <button className="bg-blue-500 text-white font-bold py-2 px-6 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
          Join Now for ₹99
        </button>
      </div>
      </div>
    </section>
  )
}

export default CoachSection
