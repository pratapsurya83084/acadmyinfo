import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
const GuaranteeCashback = () => {
  return (
    <section>
      <div>
        <div className='text-center mt-10 p-4 text-2xl font-bold'>
        <h1>Still Unsure? We've Got You Covered!</h1>
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

        </div>
       
        <div className=' bg-custom-brown flex flex-col justify-center items-center mx-10 md:mx-10 lg:mx-20 rounded-3xl'>
          <h2 className='text-center font-bold md:hidden p-6 text-2xl'>Our Guarantee</h2>
       
          <div className=' md:flex flex-row justify-center items-center gap-20'>
              
               <div className='px-10'>
                    <h1 className='py-2 hidden md:flex font-bold text-2xl'>Our Guarantee</h1>
                <p className='text-xl'>Take advantage of this incredible offer now for only Rs 99, 
                  with a money-back <br />guarantee included. 
                  Enroll today, attend our seminar, and if you're
                   not satisfied for any reason, <br /> just send us an email,
                    and we'll refund your entire payment—no questions asked!
                </p>
               </div>

               <div className='py-10 flex items-center justify-center'>
                <img  className='md:w-full w-[300px] h-[200px]' src="https://rajivtalreja.sgacademy.info/wp-content/uploads/2023/04/360_F_52353227_QN4uFwGBnLfLtZzAxacByJujbzneuGMB-removebg-preview.png" alt="" />
               </div>
          </div>
        </div>

        <div className="flex justify-center mt-8">
        <button className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
          Join Now for ₹99 
          {/* <span className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-blue-600 px-4 py-2 rounded-xl mr-3"> */}
              <FontAwesomeIcon icon={faGreaterThan}  className='mx-5 bg-white text-blue-500 px-4 p-2 rounded-lg pt-2'/>
            {/* </span> */}
        </button>
      </div>
      </div>
    </section>
  )
}

export default GuaranteeCashback
