import React from 'react'
 
const FooterBar = () => {
  return (
    <footer>
        {/* sm:flex-row sm:justify-between */}
      <div className='fixed-footer  bg-custom-gray  sm:p-0 pb-4 flex flex-col justify-center items-center sm:flex-row sm:justify-between'>
      <div>
        <div className='gap-2 p-2 md:flex flex-row text-red-700 text-2xl font-bold'>
        <h1>Almost  Full</h1>
        {/* Blinking text */}
        <h2 className='blinking'>Only 2 Seats Left</h2>
        </div>
         <p className=' font-bold px-2 py-2'>Enrollment closes on 15 JUN</p>
      </div>
      
     <div className="flex justify-center sm: mt-8  sm:px-2">
        <button className="bg-blue-600   text-white text-2xl font-bold py-2 px-6 rounded-xl  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
          Join Now for ₹99
        </button>
      </div>
      </div>
    </footer>
  )
}

export default FooterBar
