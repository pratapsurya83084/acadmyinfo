import React from "react";
// import { Card } from "flowbite-react";
import OfferPrice  from './OfferPrice'
const BonusSection = () => {
  return (
    <section>
      <div className=" flex flex-col justify-center items-center  mt-10 bg-custom-brown rounded-3xl">
        <h1 className=" mt-10 text-center text-2xl font-bold">
          Unlock Exclusive Bonuses When You Register Before the Timer Expires!
        </h1>
        {/* yellow 2olor arrow curved */}
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
              stroke="yellow"             strokeWidth="5"
              fill="none"
            />
          </svg>
        </div>

        <div className="mb-10 mx-10 mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {/* card 1 */}

          <div className="max-w-sm bg-gray border-dashed border-2 border-yellow-200  rounded-3xl p-4">
            <h1 className="text-center  mb-2">SOLUTION COURSE #1</h1>
            <h2 className="text-center rounded-xl text-xl text-black font-bold m-2 bg-yellow-200 p-2">Priced at: ₹798/-</h2>
            <h5 className="text-xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
              An 8-Step-by-Step Guide to Making Confident Business Decisions
            </h5>
          </div>

          {/* card 2 */}
          <div className="max-w-sm bg-gray border-dashed border-2 border-yellow-200  rounded-3xl p-4">
            <h1 className="text-center  mb-2">SOLUTION COURSE #2</h1>
            <h2 className="text-center rounded-xl text-xl text-black font-bold m-2 bg-yellow-200 p-2">Priced at: ₹798/-</h2>
            <h5 className="text-xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
            10 Essential Strategies for Building and Scaling Your Business

            </h5>
          </div>

          {/* card 3 */}
          <div className="max-w-sm bg-gray border-dashed border-2 border-yellow-200  rounded-3xl p-4">
            <h1 className="text-center  mb-2">SOLUTION COURSE #3</h1>
            <h2 className="text-center rounded-xl text-xl text-black font-bold m-2 bg-yellow-200 p-2">Priced at: ₹998/-</h2>
            <h5 className="text-xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
            6 Unlocking the Secrets of Financial Success for Entrepreneurs  
            </h5>
          </div>

          {/* card 4 */}
          <div className="max-w-sm bg-gray border-dashed border-2 border-yellow-200  rounded-3xl p-4">
            <h1 className="text-center  mb-2">SOLUTION COURSE #4</h1>
            <h2 className="text-center rounded-xl text-xl text-black font-bold m-2 bg-yellow-200 p-2">Priced at: ₹798/-</h2>
            <h5 className="text-xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
            15 Techniques to Maximize Efficiency and Achieve More in Less Time
            </h5>
          </div>

          {/* card 5 */}
          <div className="max-w-sm bg-gray border-dashed border-2 border-yellow-200  rounded-3xl p-4">
            <h1 className="text-center  mb-2">SOLUTION COURSE #5</h1>
            <h2 className="text-center rounded-xl text-xl text-black font-bold m-2 bg-yellow-200 p-2">Priced at: ₹798/-</h2>
            <h5 className="text-xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
            18 Strategies to Skyrocket Your Business Growth and Attract Your Ideal Customers

            </h5>
          </div>

          {/* card 6 */}
          <div className="max-w-sm bg-gray border-dashed border-2 border-yellow-200  rounded-3xl p-4">
            <h1 className="text-center  mb-2">SOLUTION COURSE #6</h1>
            <h2 className="text-center rounded-xl text-xl text-black font-bold m-2 bg-yellow-200 p-2">Priced at: ₹898/-</h2>
            <h5 className="text-xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
            2 best E-book for Becoming a Visionary Leader in Your Industry.
            </h5>
          </div>

          {/* card 7 */}
          <div className="max-w-sm bg-gray border-dashed border-2 border-yellow-200  rounded-3xl p-4">
            <h1 className="text-center  mb-2">SOLUTION COURSE #7</h1>
            <h2 className="text-center rounded-xl text-xl text-black font-bold m-2 bg-yellow-200 p-2">Priced at: ₹898/-</h2>
            <h5 className="text-xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
            How to Build Wealth and Create Financial Stability for Life
            </h5>
          </div>

          {/* card 8 */}
          <div className="max-w-sm bg-gray border-dashed border-2 border-yellow-200  rounded-3xl p-4">
            <h1 className="text-center  mb-2">SOLUTION COURSE #7</h1>
            <h2 className="text-center rounded-xl text-xl text-black font-bold m-2 bg-yellow-200 p-2">Priced at: ₹798/-</h2>
            <h5 className="text-xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
            15 Networking Ninja: Mastering the Art of Building Professional Relationships for Business Success
            </h5>
          </div>

          {/* card 9 */}
          <div className="max-w-sm bg-gray border-dashed border-2 border-yellow-200  rounded-3xl p-4">
            <h1 className="text-center  mb-2">SOLUTION COURSE #8</h1>
            <h2 className="text-center rounded-xl text-xl text-black font-bold m-2 bg-yellow-200 p-2">Priced at: ₹ 998/-</h2>
            <h5 className="text-xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
            7 Strategies for Delighting Your Customers and Building Loyalty
            </h5>
          </div>
 

             {/* card 10 */}
          <div className="max-w-sm bg-gray border-dashed border-2 border-yellow-200  rounded-3xl p-4">
            <h1 className="text-center  mb-2">SOLUTION COURSE #9</h1>
            <h2 className="text-center rounded-xl text-xl text-black font-bold m-2 bg-yellow-200 p-2">Priced at: ₹699/-</h2>
            <h5 className="text-xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
            6 Strategies Leveraging Social Platforms to Boost Your Brand and Drive Sales.
            </h5>
          </div>

          {/* card 11 */}
          <div className="max-w-sm bg-gray border-dashed border-2 border-yellow-200  rounded-3xl p-4">
            <h1 className="text-center  mb-2">SOLUTION COURSE #10</h1>
            <h2 className="text-center rounded-xl text-xl text-black font-bold m-2 bg-yellow-200 p-2">Priced at: ₹898/-</h2>
            <h5 className="text-xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
            9 Business Growth Hacks: Insider Tips and Tricks for Accelerating Your Company's Expansion
            </h5>
          </div>

          {/* card 12 */}
          <div className="max-w-sm bg-gray border-dashed border-2 border-yellow-200  rounded-3xl p-4">
            <h1 className="text-center  mb-2">SOLUTION COURSE #11</h1>
            <h2 className="text-center rounded-xl text-xl text-black font-bold m-2 bg-yellow-200 p-2">Priced at: ₹699/-</h2>
            <h5 className="text-xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
            10 Mindfulness techniques for Entrepreneurs: Cultivating Clarity, Focus, and Balance in Your Business and Life
            </h5>
          </div>



      
      </div>
      <OfferPrice/>


     {/* Blue polygon image */}
     {/* <img
            className=" animate-move-x-reverse md:h-14 relative top-4 bottom-0 left-0 xl:ml-20"
            src="https://rajivtalreja.sgacademy.info/wp-content/uploads/2023/04/Polygon-blue.svg"
            alt=""
          /> */}
      </div>
     
    </section>
  );
};

export default BonusSection;



// <div class="elementor-element elementor-element-8912589 elementor-widget elementor-widget-pp-countdown" data-id="8912589" data-element_type="widget" data-widget_type="pp-countdown.default">
// 				<div class="elementor-widget-container">
// 					<div class="pp-countdown-wrapper pp-countdown-label-inside pp-countdown-label-pos-in_below pp-countdown-separator-hide-mobile pp-countdown-align-center pp-countdown-style-square is-countdown">
							
		
							
		
							
		
// 					 		<div class="pp-countdown-item">
// 			<div class="pp-countdown-digit-wrapper">
// 				<div class="pp-countdown-digit-content">
// 					<h3 class="pp-countdown-digit">
// 						09					</h3>
// 				</div>
// 								<div class="pp-countdown-label-wrapper">
// 					<div class="pp-countdown-label">
// 						Minutes					</div>
// 				</div>
// 							</div>
// 					</div>
		
// 					 		<div class="pp-countdown-item">
// 			<div class="pp-countdown-digit-wrapper">
// 				<div class="pp-countdown-digit-content">
// 					<h3 class="pp-countdown-digit">
// 						27					</h3>
// 				</div>
// 								<div class="pp-countdown-label-wrapper">
// 					<div class="pp-countdown-label">
// 						Seconds					</div>
// 				</div>
// 							</div>
// 					</div>
		
// 				</div>
// 		<textarea name="pp-countdown-settings" style="display: none;">{"timer_type":"everyellow"2"days":"0","hours":"0","minutes":"15","seconds":"0","show_labels":"yes","show_years":"","show_months":"","show_days":"","show_hours":"","show_minutes":"yes","show_seconds":"yes","label_minutes_plural":"Minutes","label_minutes_singular":"Minute","label_seconds_plural":"Seconds","label_seconds_singular":"Second","block_style":"square","label_position":"inside","everyellow_2imer_action":"reset","timer_layout":"\n\t\t\t\t\t{o&lt;} \t\t&lt;div class=\"pp-countdown-item\"&gt;\n\t\t\t&lt;div class=\"pp-countdown-digit-wrapper\"&gt;\n\t\t\t\t&lt;div class=\"pp-countdown-digit-content\"&gt;\n\t\t\t\t\t&lt;h3 class=\"pp-countdown-digit\"&gt;\n\t\t\t\t\t\t{onn}\t\t\t\t\t&lt;\/h3&gt;\n\t\t\t\t&lt;\/div&gt;\n\t\t\t\t\t\t\t\t&lt;div class=\"pp-countdown-label-wrapper\"&gt;\n\t\t\t\t\t&lt;div class=\"pp-countdown-label\"&gt;\n\t\t\t\t\t\t{ol}\t\t\t\t\t&lt;\/div&gt;\n\t\t\t\t&lt;\/div&gt;\n\t\t\t\t\t\t\t&lt;\/div&gt;\n\t\t\t{o&gt;}\t\t&lt;\/div&gt;\n\t\t\n\t\t\t\t\t{d&lt;} \t\t&lt;div class=\"pp-countdown-item\"&gt;\n\t\t\t&lt;div class=\"pp-countdown-digit-wrapper\"&gt;\n\t\t\t\t&lt;div class=\"pp-countdown-digit-content\"&gt;\n\t\t\t\t\t&lt;h3 class=\"pp-countdown-digit\"&gt;\n\t\t\t\t\t\t{dnn}\t\t\t\t\t&lt;\/h3&gt;\n\t\t\t\t&lt;\/div&gt;\n\t\t\t\t\t\t\t\t&lt;div class=\"pp-countdown-label-wrapper\"&gt;\n\t\t\t\t\t&lt;div class=\"pp-countdown-label\"&gt;\n\t\t\t\t\t\t{dl}\t\t\t\t\t&lt;\/div&gt;\n\t\t\t\t&lt;\/div&gt;\n\t\t\t\t\t\t\t&lt;\/div&gt;\n\t\t\t{d&gt;}\t\t&lt;\/div&gt;\n\t\t\n\t\t\t\t\t{h&lt;} \t\t&lt;div class=\"pp-countdown-item\"&gt;\n\t\t\t&lt;div class=\"pp-countdown-digit-wrapper\"&gt;\n\t\t\t\t&lt;div class=\"pp-countdown-digit-content\"&gt;\n\t\t\t\t\t&lt;h3 class=\"pp-countdown-digit\"&gt;\n\t\t\t\t\t\t{hnn}\t\t\t\t\t&lt;\/h3&gt;\n\t\t\t\t&lt;\/div&gt;\n\t\t\t\t\t\t\t\t&lt;div class=\"pp-countdown-label-wrapper\"&gt;\n\t\t\t\t\t&lt;div class=\"pp-countdown-label\"&gt;\n\t\t\t\t\t\t{hl}\t\t\t\t\t&lt;\/div&gt;\n\t\t\t\t&lt;\/div&gt;\n\t\t\t\t\t\t\t&lt;\/div&gt;\n\t\t\t{h&gt;}\t\t&lt;\/div&gt;\n\t\t\n\t\t\t\t\t{m&lt;} \t\t&lt;div class=\"pp-countdown-item\"&gt;\n\t\t\t&lt;div class=\"pp-countdown-digit-wrapper\"&gt;\n\t\t\t\t&lt;div class=\"pp-countdown-digit-content\"&gt;\n\t\t\t\t\t&lt;h3 class=\"pp-countdown-digit\"&gt;\n\t\t\t\t\t\t{mnn}\t\t\t\t\t&lt;\/h3&gt;\n\t\t\t\t&lt;\/div&gt;\n\t\t\t\t\t\t\t\t&lt;div class=\"pp-countdown-label-wrapper\"&gt;\n\t\t\t\t\t&lt;div class=\"pp-countdown-label\"&gt;\n\t\t\t\t\t\t{ml}\t\t\t\t\t&lt;\/div&gt;\n\t\t\t\t&lt;\/div&gt;\n\t\t\t\t\t\t\t&lt;\/div&gt;\n\t\t\t{m&gt;}\t\t&lt;\/div&gt;\n\t\t\n\t\t\t\t\t{s&lt;} \t\t&lt;div class=\"pp-countdown-item\"&gt;\n\t\t\t&lt;div class=\"pp-countdown-digit-wrapper\"&gt;\n\t\t\t\t&lt;div class=\"pp-countdown-digit-content\"&gt;\n\t\t\t\t\t&lt;h3 class=\"pp-countdown-digit\"&gt;\n\t\t\t\t\t\t{snn}\t\t\t\t\t&lt;\/h3&gt;\n\t\t\t\t&lt;\/div&gt;\n\t\t\t\t\t\t\t\t&lt;div class=\"pp-countdown-label-wrapper\"&gt;\n\t\t\t\t\t&lt;div class=\"pp-countdown-label\"&gt;\n\t\t\t\t\t\t{sl}\t\t\t\t\t&lt;\/div&gt;\n\t\t\t\t&lt;\/div&gt;\n\t\t\t\t\t\t\t&lt;\/div&gt;\n\t\t\t{s&gt;}\t\t&lt;\/div&gt;\n\t\t\n\t\t\t\t","timer_format":"MS","timer_labels":"Years,Months,,Days,Hours,Minutes,Seconds","timer_labels_singular":"Year,Month,,Day,Hour,Minute,Second","time_zone":"NULL","timer_exp_text":"","redirect_link":"","redirect_link_target":"","expire_message":""}</textarea>
// 				</div>
// 				</div>



