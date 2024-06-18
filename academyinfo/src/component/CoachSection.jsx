import React from "react";

const CoachSection = () => {
  return (
    <section>
      <div className="flex flex-col items-center bg-black text-white p-8">
        <h1 className="text-3xl font-bold mb-4">
          Get Acquainted with Your Coach
        </h1>
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
              stroke="green"
              strokeWidth="5"
              fill="none"
            />
          </svg>
        </div>
        <div className="bg-custom-brown flex flex-row h-[168px] mt-10 lg:w-[600px] w-full rounded-3xl pr-20">
          <div>
            <img
              src="https://rajivtalreja.sgacademy.info/wp-content/uploads/2023/04/Rajiv-27.png"
              className="h-52 ml-2  relative bottom-10"
              alt=""
            />
          </div>
          <div className="mt-14 px-2">
            <h1 className="text-2xl font-bold">Bishop Adhikari</h1>
            <p>India's MSME Business Coach</p>
          </div>
        </div>

        <div className=" justify-around flex-wrap  grid grid-cols sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full  mt-8 gap-5  md:gap-x-   lg:gap-x-29 xl-gap-x-10">
          {/* cards1 */}
          <div className="flex flex-row m-2 items-center w-[300px] h-[170px] bg-custom-brown text-white rounded-2xl p-4   min-w-[200px]">
            <div>
              <h3 className="text-3xl font-bold">5+</h3>
              <p className="text-sm text-gray-300">
                Company Owner with a valuation of $2 Billion With profitable
              </p>
            </div>
            <div>
              <h1 className="pl-32 mb-32 p-2">
                <img  className="bg-green-500 mt-2 rounded-xl p-2"
                  src="https://cdn-icons-png.flaticon.com/512/12274/12274982.png"
                  alt=""
                />
              </h1>
            </div>
          </div>

          {/* cards2 */}
          <div className="flex flex-row items-center w-[300px] h-[170px] bg-custom-brown text-white rounded-2xl p-4 m-2  min-w-[200px]">
            <div>
              <h3 className="text-3xl font-bold">2L+</h3>
              <p className="text-sm text-gray-300 ">Student base</p>
            </div>
            <div>
              <h1 className="pl-40 mb-20 ml-4 mt-2 p- h-20">
                <img className="bg-green-500  rounded-xl p-2"
                  src="https://cdn-icons-png.flaticon.com/512/10412/10412528.png"
                  alt=""
                />
              </h1>
            </div>
          </div>

          {/* cards3 */}
          <div className="flex flex-row items-center w-[300px] h-[170px] bg-custom-brown text-white rounded-2xl p-4 m-2  min-w-[200px]">
            <div>
              <h3 className="text-3xl font-bold">15M+</h3>
              <p className="text-sm text-gray-300">
                Entrepreneur Enthuasist has reached in last 2 years
              </p>
            </div>
            <div className="pl-32 mb-20 ml-4 mt-2 p- h-20">
            <img className="bg-green-500 rounded-xl mt-2" src="https://cdn-icons-png.flaticon.com/512/8660/8660446.png" alt="" />
            </div>
          </div>

          {/* cards4 */}
          <div className="flex flex-row items-center w-[300px] h-[170px] bg-custom-brown text-white rounded-2xl p-4 m-2  min-w-[200px]">
            <div>
              <h3 className="text-3xl font-bold">1000+</h3>
              <p className="text-sm text-gray-300">Workshop and Saminer</p>
            </div>
            <div className="  pl-36  mt-2 mb-32   p- h-">
           <img  className="bg-green-500  rounded-xl" src="https://cdn-icons-png.flaticon.com/512/8436/8436354.png" alt="" />
            </div>
          </div>

          {/* cards5 */}
          <div className="flex flex-row items-center w-[300px] h-[170px] bg-custom-brown text-white rounded-2xl p-4 m-2  min-w-[200px]">
            <div>
              <h3 className="text-3xl font-bold">10k+</h3>
              <p className="text-sm text-gray-300">Follwers in Social Media</p>
            </div>
            <div className="pl-36  mt-6 mb-32  ">
           <img   className="bg-green-500  h-10 w-14 rounded-xl p-1" src="https://cdn-icons-png.flaticon.com/512/2065/2065064.png" alt="" />
            </div>
          </div>

          {/* cards6 */}
          <div className="flex flex-row items-center w-[300px] h-[170px] bg-custom-brown text-white rounded-2xl p-4 m-2  min-w-[200px]">
            <div>
              <h3 className="text-3xl font-bold">350k+</h3>
              <p className="text-sm text-gray-300">Paid Customer</p>
            </div>
            <div className="pl-36  mt-6 mb-32  ">
            <img className="bg-green-500 rounded-xl p-1" src="https://cdn-icons-png.flaticon.com/512/4270/4270578.png" alt="" />
            </div>
          </div>

          {/* cards7 */}
          <div className="flex flex-row items-center w-[300px] h-[170px] bg-custom-brown text-white rounded-2xl p-4 m-2  min-w-[200px]">
            <div>
              <h3 className="text-3xl font-bold">200+</h3>
              <p className="text-sm text-gray-300">
                Hours of Business consulting coaching
              </p>
            </div>
            <div  className="pl-40  mt-6 mb-32  ">
             <img className="bg-green-500  rounded-xl p-1" src="https://cdn-icons-png.flaticon.com/512/12077/12077752.png" alt="" />
            </div>
          </div>
          {/* cards8 */}
          <div className="flex flex-row items-center w-[300px] h-[170px] bg-custom-brown text-white rounded-2xl p-4 m-2  min-w-[200px]">
            <div>
              <h3 className="text-3xl font-bold">155+</h3>
              <p className="text-sm text-gray-300">
                {" "}
                Industries has explored and worked
              </p>
            </div>
            <div  className="pl-40 p- mt-6 mb-32  " >
              <img  className="bg-green-500 rounded p-" src="https://cdn-icons-png.flaticon.com/512/3246/3246663.png" alt="" />
            </div>
          </div>
          {/* cards9 */}
          <div className="flex flex-row items-center w-[300px] h-[170px] bg-custom-brown text-white rounded-2xl p-4 m-2  min-w-[200px]">
            <div>
              <h3 className="text-3xl font-bold">10k+</h3>
              <p className="text-sm text-gray-300">
                Coaching and Trainer Customer
              </p>
            </div>
            <div  className="pl-40 p- mt-6 mb-32  ">
           <img  className="bg-green-500 rounded-xl p-1" src="https://cdn-icons-png.flaticon.com/512/10822/10822370.png" alt="" />
            </div>
          </div>
          {/* cards10 */}
          <div className="flex flex-row items-center w-[300px] h-[170px] bg-custom-brown text-white rounded-2xl p-4 m-2  min-w-[200px]">
            <div>
              <h3 className="text-3xl font-bold">20k+</h3>
              <p className="text-sm text-gray-300">
                {" "}
                seminars have been taken in 10 countries
              </p>
            </div>
            <div className="pl-36 p-2 mt-6 mb-32 ">
             <img  className="bg-green-500 rounded-xl p-1" src="https://cdn-icons-png.flaticon.com/512/9323/9323726.png" alt="" />
            </div>
          </div>
          {/* cards11 */}
          <div className="flex flex-row items-center w-[300px] h-[170px] bg-custom-brown text-white rounded-2xl p-4 m-2  min-w-[200px]">
            <div>
              <h3 className="text-3xl font-bold">15M+</h3>
              <p className="text-sm text-gray-300">
                {" "}
                Citation on my research work
              </p>
            </div>
            <div className="pl-36 p- mt-6 mb-32 ">
           <img  className="bg-green-500 rounded-xl p-1" src="https://cdn-icons-png.flaticon.com/512/9643/9643115.png" alt="" />
            </div>
          </div>

          {/* cards12 */}
          <div className="flex flex-row items-center w-[300px] h-[170px] bg-custom-brown text-white rounded-2xl p-4 m-2  min-w-[200px]">
            <div>
              <h3 className="text-3xl font-bold">7+</h3>
              <p className="text-sm text-gray-300">NGO</p>
            </div>
            <div className="pl-36  p-2 ml-10 mt-6 mb-32 ">
           <img   className="bg-green-500 rounded-xl p-1"  src="https://cdn-icons-png.flaticon.com/512/8087/8087183.png" alt="" />
            </div>
          </div>

          {/* cards13 */}
          <div className="flex flex-row items-center w-[300px] h-[170px] bg-custom-brown text-white rounded-2xl p-4 m-2  min-w-[200px]">
            <div>
              <h3 className="text-3xl font-bold">5+</h3>
              <p className="text-sm text-gray-300">Degree Holding</p>
            </div>
            <div className="pl-32  p-2 ml-10 mt-6 mb-32 ">
          <img  className="bg-green-500 rounded-xl p-1"  
          src="https://cdn-icons-png.flaticon.com/512/2681/2681826.png" alt="" />
            </div>
          </div>

          {/* cards14 */}
          <div className="flex flex-row items-center w-[300px] h-[170px] bg-custom-brown text-white rounded-2xl p-4 m-2  min-w-[200px]">
            <div>
              <h3 className="text-3xl font-bold">15+</h3>
              <p className="text-sm text-gray-300">
                {" "}
                best awards in the business category
              </p>
            </div>
            <div  className="pl-32  p-2 ml-10 mt-6 mb-32 " >
               <img   className="bg-green-500 rounded-xl p-1" 
             src="https://cdn-icons-png.flaticon.com/512/3395/3395949.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoachSection;

{
  /* <div class="elementor-element elementor-element-bfa03d2 elementor-widget__width-auto elementor-absolute elementor-view-default elementor-widget elementor-widget-icon" data-id="bfa03d2" data-element_type="widget" data-settings="{&quot;_position&quot;:&quot;absolute&quot;}" data-widget_type="icon.default">
				<div class="elementor-widget-container">
					<div class="elementor-icon-wrapper">
			<div class="elementor-icon">
			<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="Layer_1" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"><style type="text/css">	.st0{fill:none;stroke:#000000;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;}</style><path class="st0" d="M16.4,4c1.9,0,3.5,1.6,3.5,3.5c0,1.9-1.5,3.4-3.4,3.5c-0.1,0-0.2,0-0.3,0 M18.3,20c0.7-0.1,1.4-0.4,2-0.9 c1.6-1.2,1.6-3.1,0-4.3c-0.5-0.4-1.2-0.7-1.9-0.9 M9.2,10.9c-0.1,0-0.2,0-0.3,0c-1.1,0-2.2-0.5-3-1.4C5,8.7,4.6,7.6,4.6,6.4 C4.6,4,6.5,2,9,2c1.2,0,2.3,0.4,3.2,1.2s1.3,1.9,1.4,3.1c0,1.2-0.4,2.3-1.2,3.2C11.5,10.4,10.3,10.8,9.2,10.9z M4.2,14.6 c-2.4,1.6-2.4,4.3,0,5.9c2.8,1.8,7.3,1.8,10,0c2.4-1.6,2.4-4.3,0-5.9C11.4,12.7,6.9,12.7,4.2,14.6z"></path></svg>			</div>
		</div>
				</div>
				</div> */
}
