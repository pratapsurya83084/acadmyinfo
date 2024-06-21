import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
const FooterBar = () => {



// To show the date and day for the 15th day from the current date, you can modify the JavaScript code as follows:

const currentDate = new Date();
const futureDate = new Date();
futureDate.setDate(currentDate.getDate() + 15);

const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
const formattedDate = futureDate.toLocaleDateString("en-US", options);

console.log(formattedDate);
  return (
    <footer>
        {/* sm:flex-row sm:justify-between */}
      <div className='radius-yellow fixed-footer  bg-custom-gray  sm:p-0 pb- flex flex-col justify-center items-center sm:flex-row sm:justify-between'>
      <div>
        <div className='gap-2 p- md:flex flex-row text-red-700 text-2xl font-bold'>
        <h1 className='px-2'>Almost  Full</h1>
        {/* Blinking text */}
        <h2 className='blinking'>Only 2 Seats Left</h2>
        </div>
         <p className=' font-bold px-2 py-'>Enrollment closes on 5.00 AM {formattedDate}</p>
      </div>
      
      <div className="flex justify-center mt-8 sm:mt-8 py-2 sm:px-2">
          <button className="bg-blue-600 text-white text-xl font-bold py-2 px-6 rounded-xl hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center justify-between space-x-4">
            <span className="flex-grow text-center">Action Now for ₹29</span>
            <FontAwesomeIcon
              icon={faGreaterThan}
              className="bg-white text-blue-500 px-4 p-2 rounded-lg"
            />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default FooterBar
