import React from "react";

const Promise = () => {
  return (
    <section>
      <div className="mx-10  lg:mx-20 mt-10  rounded-3xl bg-custom-brown flex flex-col justify-center items-center">
        <img
          src="https://rajivtalreja.sgacademy.info/wp-content/uploads/2023/04/Polygon-blue.svg"
          alt=""
        />
        <div>
          {/* section 37 */}
          <h1 className="text-center text-2xl font-bold p-2">
            {" "}
            My Commitment to You
          </h1>
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
          <p className="text-center text-xl font-bold p-2">
            I stand behind our seminars with a no-questions-asked money-back
            guarantee.
          </p>
        </div>

        <div className="p-7 text-xl">
          <h1>Dear Sir/Madam,</h1> <br />
          <p>
            {" "}
            I am dedicated to supporting your business growth journey and
            sharing invaluable insights that have positively impacted over
            1,90,000 individuals. I personally ensure that every attendee of our
            seminars receives more value than they anticipated. If, for any
            reason, you attend our seminar and feel that you haven't gained the
            expected value, I take full responsibility. Therefore, I promise a
            complete refund of the seminar fee of Rs 99. Simply email me at
            ceobishophumane@bisjhintus.com, and my team will promptly process
            your refund.
          </p>
          <p className="mt-10">Best Regards,<br />
           Bishop Adhikari</p>
          <img  className="h-10" src="https://rajivtalreja.sgacademy.info/wp-content/uploads/2023/04/website_logo-1-300x137-1.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Promise;
